import { has } from '$lib/utilities/has';
import { createEventGroup } from './create-event-group';
import { getGroupId } from './get-group-id';

import type { EventSortOrder } from '$lib/stores/event-view';

export { getGroupForEvent } from './get-group-for-event';

const addToExistingGroup = (group: EventGroup, event: WorkflowEvent): void => {
  if (!group) return;

  group.events.set(event.id, event);
  group.eventIds.add(event.id);

  group.timestamp = event.timestamp;
};

export const groupEvents = (
  events: CommonHistoryEvent[],
  sort: EventSortOrder = 'ascending',
): EventGroups => {
  const groupMap: Record<string, EventGroup> = {};

  for (const event of events) {
    const id = getGroupId(event);
    const group = createEventGroup(event);

    if (group) {
      groupMap[group.id] = group;
    } else {
      addToExistingGroup(groupMap[id], event);
    }
  }

  let groups = Object.values(groupMap);
  console.log('Groups: ', groups);

  for (const group of groups) {
    const workflowTaskId = group.attributes?.workflowTaskCompletedEventId;
    if (workflowTaskId) {
      const workflowTaskGroup = groups.find(
        (g) => g.lastEvent?.eventId === workflowTaskId,
      );
      if (workflowTaskGroup) {
        workflowTaskGroup.subGroups.push(group);
        groups = groups.filter((g) => g.id !== group.id);
      } else {
        console.error('No task group found!');
      }
    }
  }

  return sort === 'descending'
    ? Object.values(groups).reverse()
    : Object.values(groups);
};

export const isEventGroup = (
  eventOrGroup: unknown,
): eventOrGroup is EventGroup => {
  if (eventOrGroup === undefined || eventOrGroup === null) return false;
  return has(eventOrGroup, 'events');
};

export const isEventGroups = (
  eventsOrGroups: unknown[],
): eventsOrGroups is EventGroups => {
  if (eventsOrGroups === undefined || eventsOrGroups === null) return false;
  return eventsOrGroups.every(isEventGroup);
};

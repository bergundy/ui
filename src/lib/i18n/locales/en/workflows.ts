export const Namespace = 'workflows' as const;

export const Strings = {
  'loading-workflows': 'Loading workflows',
  'recent-workflows': 'Recent Workflows',
  'recent-workflows-link': 'View Recent Workflows',
  'workflows-count_one': '{{count, number}} workflow',
  'workflows-count_other': '{{count, number}} workflows',
  'workflows-error-querying':
    'A error has occurred while querying for Workflows.',
  'filtered-workflows-count':
    'Results {{filtered, number}} of {{total, number}} workflows',
  terminate: 'Terminate',
  'batch-operation-modal-title': '{{action}} Workflows',
  'workflow-action-reason-placeholder': '{{action}} from the Web UI',
  'workflow-action-reason-placeholder-with-email':
    '{{action}} from the Web UI by {{email}}',
  'batch-operation-confirmation-all':
    'Are you sure you want to {{action}} all workflows matching the following query? This action cannot be undone.',
  'batch-operation-count-disclaimer':
    'Note: The actual count of workflows that will be affected is the total number of running workflows matching this query at the time of clicking "{{action}}".',
  'batch-cancel-confirmation_one':
    'Are you sure you want to cancel {{count, number}} running workflow?',
  'batch-cancel-confirmation_other':
    'Are you sure you want to cancel {{count, number}} running workflows?',
  'batch-terminate-confirmation_one':
    'Are you sure you want to terminate {{count, number}} running workflow?',
  'batch-terminate-confirmation_other':
    'Are you sure you want to terminate {{count, number}} running workflows?',
  'batch-operation-confirmation-input-hint':
    'If you supply a custom reason, "{{placeholder}}" will be appended to it.',
  'batch-terminate-all-success':
    'The batch $t(terminate) request is processing in the background.',
  'batch-cancel-all-success':
    'The batch $t(cancel) request is processing in the background.',
  'batch-terminate-success': 'Successfully $t(terminated) {{count}} workflows.',
  'batch-cancel-success': 'Successfully $t(canceled) {{count}} workflows.',
  'configure-workflows': 'Configure Workflow List',
  'open-configure-workflows': 'Open workflow list configuration',
  'close-configure-workflows': 'Close workflow list configuration',
  'configure-workflows-description':
    'Add (<1></1>), re-arrange (<2></2>), and remove (<3></3>), Workflow Headings to personalize the Workflow List Table.',
  'all-statuses': 'All Statuses',
  running: 'Running',
  'timed-out': 'Timed Out',
  completed: 'Completed',
  failed: 'Failed',
  'contd-as-new': "Cont'd as New",
  'continued-as-new': 'Continued as New',
  terminated: 'Terminated',
  canceled: 'Canceled',
  paused: 'Paused',
  reset: 'Reset',
  signal: 'Send a Signal',
  'n-selected': '{{count, number}} selected',
  'all-selected': 'All {{count, number}} selected.',
  'select-all': 'select all {{count, number}}',
  'request-cancellation': 'Request Cancellation',
  'back-to-workflows': 'Back to Workflows',
  'auto-refresh': 'Auto refresh',
  'auto-refresh-tooltip': '15 second page refresh',
  input: 'Input',
  'input-and-results': 'Input and Results',
  'continued-as-new-with-input': 'Continued as New with Input',
  results: 'Results',
  'recent-events': 'Recent Events',
  'recent-events-view': 'Recent Events View',
  history: 'History',
  compact: 'Compact',
  json: 'JSON',
  download: 'Download',
  'workflow-actions': 'Workflow Actions',
  'reset-disabled':
    'Resetting workflows is not enabled, please contact your administrator for assistance.',
  'reset-disabled-pending-children':
    'Cannot reset workflows with pending children.',
  'reset-disabled-no-events':
    'Cannot reset workflows without WorkflowTaskStarted, WorkflowTaskCompleted, or WorkflowTaskTimedOut events.',
  'signal-disabled':
    'Signaling workflows is not enabled, please contact your administrator for assistance.',
  'terminate-disabled':
    'Terminating workflows is not enabled, please contact your adminstrator for assistance.',
  'terminate-success': 'Workflow terminated.',
  'cancel-success': 'Workflow canceled.',
  'signal-success': 'Workflow signaled.',
  'reset-modal-title': 'Reset Workflow',
  'reset-reapply-type-label': 'Reapply Type',
  'reset-reapply-all': 'All Events',
  'reset-reapply-signals-only': 'Signals Only',
  'reset-reapply-none': 'None',
  'cancel-modal-title': 'Cancel Workflow',
  'cancel-modal-confirmation':
    'Are you sure you want to cancel this workflow? This action cannot be undone.',
  'terminate-modal-title': 'Terminate Workflow',
  'terminate-modal-confirmation':
    'Are you sure you want to terminate this workflow? This action cannot be undone.',
  'signal-modal-title': 'Send a Signal',
  'signal-name-label': 'Signal name',
  'signal-payload-input-label': 'Input',
  'signal-payload-input-label-hint': '(only JSON payloads are supported)',
  'cancel-request-sent': 'Cancel Request Sent',
  'cancel-request-sent-description':
    "The request to cancel this Workflow Execution has been sent. If the Workflow uses the cancellation API, it'll cancel at the next available opportunity.",
  'reset-success-alert-title': 'This Workflow has been reset',
  'reset-success-alert-description':
    'You can find the resulting Workflow Execution <1>here</1>.',
  'history-tab': 'History',
  'workflow-history': 'Workflow History',
  'workers-tab': 'Workers',
  'pending-activities-tab': 'Pending Activities',
  'stack-trace-tab': 'Stack Trace',
  'queries-tab': 'Queries',
  'workflow-error-no-workers-title': 'No Workers Running',
  'workflow-error-no-workers-description':
    'There are no Workers polling the {{taskQueue}} Task Queue.',
  'workflow-error-no-compatible-workers-title': 'No Compatible Workers Running',
  'workflow-error-no-compatible-workers-description':
    'There are no compatible Workers polling the {{taskQueue}} Task Queue.',
  'state-transitions': 'State Transitions',
  'start-and-close-time': 'Start & Close Time',
  relationships: 'Relationships',
  parents_zero: '0 Parents',
  parents_one: '1 Parent',
  'pending-children_one': '1 Pending Child',
  'pending-children_other': '{{count}} Pending Children',
  children_one: '1 Child',
  children_other: '{{count}} Children',
  first: '{{count}} First',
  previous: '{{count}} Previous',
  next: '{{count}} Next',
  'no-relationships': "This workflow doesn't have any relationships",
  'parent-id': 'Parent Workflow ID',
  'parent-run-id': 'Parent Run ID',
  'parent-workflow': 'Parent Workflow',
  'first-execution': 'First Execution',
  'previous-execution': 'Previous Execution',
  'next-execution': 'Next Execution',
  'child-id': 'Child Workflow ID',
  'child-run-id': 'Child Run ID',
  'pending-activities': 'Pending Activities',
  'pending-activities-canceled': 'Pending activities have been canceled.',
  'activity-type': 'Activity Type',
  'last-heartbeat': 'Last Heartbeat',
  attempt: 'Attempt',
  'attempts-left': 'Attempts Left',
  'next-retry': 'Next Retry',
  expiration: 'Expiration',
  'heartbeat-details': 'Heartbeat Details',
  'last-failure': 'Last Failure',
  'last-accessed': 'Last Accessed',
  'workflow-task-handler': 'Workflow Task Handler',
  'activity-handler': 'Activity Handler',
  'workers-empty-state': 'No Workers Found',
  'stack-trace-empty-state': 'No Stack Traces Found',
  'no-workers-failure-message':
    'This will fail if you have no workers running.',
  'no-workers-running-message':
    'Please make sure you have at least one worker running.',
  'stack-trace-at': 'Stack Trace at',
  'stack-trace-link-preface': 'To enable ',
  'stack-trace-link': 'stack traces',
  'stack-trace-link-postface':
    ', run a Worker on the {{taskQueue}} Task Queue.',
  'json-formatting': 'JSON Formatting',
  'query-type': 'Query Type',
  'pending-activities-empty-state': 'No Pending Activities',
  'activity-id': 'Activity ID',
  details: 'Details',
  'maximum-attempts': 'Maximum Attempts',
  'retry-expiration': 'Retry Expiration',
  state: 'State',
  'last-started-time': 'Last Started Time',
  'scheduled-time': 'Scheduled Time',
  'last-worker-identity': 'Last Worker Identity',
  unlimited: 'Unlimited',
  'no-expiration': 'No Expiration',
  'no-retry': 'None',
  filter: 'Filter',
  'view-search-input': 'View Search Input',
  'select-time': 'Select Time',
  'search-placeholder': 'Enter a query',
  'child-workflows': 'Child Workflows',
  'retry-workflows': 'Retry Workflows',
  'workflow-name': 'Workflow Name',
  'filter-by': 'filter by {{workflowName}} type',
  'select-all-workflows': 'Select all Workflows',
  'select-workflow': 'Select Workflow {{workflow}}',
  'empty-state-title': 'No Workflows Found',
  'empty-state-description':
    'If you have filters applied, try adjusting them. Otherwise please check your syntax and try again.',
  'remove-filter-label': 'Remove {{attribute}} filter',
  'remove-keyword-label': 'Remove {{keyword}} keyword',
  'move-column-up-label': 'Move {{column}} column up',
  'move-column-down-label': 'Move {{column}} column down',
  'add-column-label': 'Add {{column}} column',
  'remove-column-label': 'Remove {{column}} column',
  'pin-column-label': 'Pin {{column}} column',
  'unpin-column-label': 'Unpin {{column}} column',
  'archived-workflows': 'Archived Workflows',
  archival: 'Archival',
  'workflow-query-empty-state-title': 'No Results',
  'workflow-query-empty-state-preface':
    'There are no results for the applied filters.',
  'workflow-query-empty-state-postface':
    'Try adjusting or clearing the filters to see the Workflows running on this Namespace.',
  'workflow-query-error-state': 'There is an error with filtering Workflows.',
  'workflow-empty-state-title': 'No Workflows running in this Namespace',
  'workflow-empty-state-description': `You can populate the Web UI with sample Workflows. You can find a complete list of executable code samples at`,
  'visibility-disabled-archival':
    'This namespace is currently enabled for archival but visibility is not enabled.',
  'archival-link-preface': 'To enable ',
  'archival-link': 'archival visibility',
  'archival-disabled-title':
    'This namespace is currently not enabled for archival.',
  'archival-disabled-details':
    'Run this command to enable archival visibility for event histories',
  'archival-empty-state-description':
    'No results found for archival visibility.',
  'basic-search': 'Basic Search',
  'advanced-search': 'Advanced Search',
  'time-range': 'Time Range',
  'pending-activities-link': 'Show all Pending Activities',
} as const;

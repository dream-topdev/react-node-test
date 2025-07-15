const mockTasks = [
    {
      id: '1',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the TaskFlow project',
      status: 'incomplete',
      priority: 'high',
      dueDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      progress: 0,
    },
    {
      id: '2',
      title: 'Fix navigation bug',
      description: 'Address the issue with sidebar navigation on mobile devices',
      status: 'complete',
      priority: 'medium',
      dueDate: new Date().toISOString(),
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      progress: 100,
    },
    {
      id: '3',
      title: 'Implement user feedback',
      description: 'Add the user feedback form to the dashboard',
      status: 'incomplete',
      priority: 'low',
      dueDate: new Date(Date.now() + 86400000).toISOString(),
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      progress: 0,
    },
    {
      id: '4',
      title: 'Update dependencies',
      description: 'Update all npm packages to their latest versions',
      status: 'incomplete',
      priority: 'medium',
      dueDate: new Date(Date.now() + 172800000).toISOString(),
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      progress: 0,
    }
  ];

export default mockTasks;
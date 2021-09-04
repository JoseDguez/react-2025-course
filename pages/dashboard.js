const { default: EmptyState } = require('@/components/EmptyState');
const { useAuth } = require('@/lib/auth');

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <EmptyState />;
};

export default Dashboard;

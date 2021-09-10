import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';

const { default: EmptyState } = require('@/components/EmptyState');
const { useAuth } = require('@/lib/auth');

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;

// pages/Dashboard.js (Updated)
import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiShoppingCart, FiUsers } from 'react-icons/fi';
import StatCard from '../components/StatCard';
import RecentTransactions from '../components/RecentTransactions';
import InventoryAlerts from '../components/InventoryAlerts';
import RevenueChart from '../components/RevenueChart';
import SalesMap from '../components/SalesMap';

const Dashboard = () => {
  const businessData = {
    revenue: { current: 125640, target: 150000, growth: 12.5 },
    expenses: { current: 45680, budget: 50000, growth: -3.2 },
    profit: { current: 79960, target: 100000, growth: 8.7 },
    customers: { current: 1245, target: 1500, growth: 5.2 }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Business Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Revenue"
          value={`₹${businessData.revenue.current.toLocaleString()}`}
          change={businessData.revenue.growth}
          icon={<FiTrendingUp className="h-6 w-6 text-green-500" />}
          target={`Target: ₹${businessData.revenue.target.toLocaleString()}`}
        />
        <StatCard
          title="Expenses"
          value={`₹${businessData.expenses.current.toLocaleString()}`}
          change={businessData.expenses.growth}
          icon={<FiTrendingDown className="h-6 w-6 text-red-500" />}
          target={`Budget: ₹${businessData.expenses.budget.toLocaleString()}`}
        />
        <StatCard
          title="Profit"
          value={`₹${businessData.profit.current.toLocaleString()}`}
          change={businessData.profit.growth}
          icon={<FiTrendingUp className="h-6 w-6 text-green-500" />}
          target={`Target: ₹${businessData.profit.target.toLocaleString()}`}
        />
        <StatCard
          title="Customers"
          value={businessData.customers.current.toLocaleString()}
          change={businessData.customers.growth}
          icon={<FiUsers className="h-6 w-6 text-blue-500" />}
          target={`Goal: ${businessData.customers.target.toLocaleString()}`}
        />
      </div>
      
      {/* Revenue Chart */}
      <div className="mb-8">
        <RevenueChart />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesMap />
        </div>
        <div className="space-y-6">
          <RecentTransactions />
          <InventoryAlerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React from "react";
import CardDashboard from "../components/DashboardCard";

const dummyDataCard = [
  {
    id: 1,
    title: "💰 Revenue",
    description: "From last month",
    amount: "$12.345",
    imageColor: "danger",
    percentNumber: 5,
    isRise: false,
  },
  {
    id: 2,
    title: "📈 Sales",
    description: "Compared to last week",
    amount: "$23.456",
    imageColor: "success",
    percentNumber: 8,
    isRise: true,
  },
  {
    id: 3,
    title: "📊 Market Share",
    description: "Year over year",
    amount: "48%",
    imageColor: "danger",
    percentNumber: 2,
    isRise: false,
  },
  {
    id: 4,
    title: "👥 New Users",
    description: "In the last 24 hours",
    amount: "345",
    imageColor: "success",
    percentNumber: 15,
    isRise: true,
  },
];

const Dashboard = () => {
  return (
    <section className="grid gap-[25px] md:grid-cols-4">
      {/* CARD */}
      {dummyDataCard?.map((item) => (
        <CardDashboard
          key={item?.id}
          title={item?.title}
          description={item?.description}
          amount={item?.amount}
          imageColor={item?.imageColor}
          percentNumber={item?.percentNumber}
          isRise={item?.isRise}
        />
      ))}
    </section>
  );
};

export default Dashboard;

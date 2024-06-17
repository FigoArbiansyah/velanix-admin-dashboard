import React from "react";
import CardDashboard from "../../components/DashboardCard";
import { StockChart } from "./charts/StockChart";
import { CarryingCostChart } from "./charts/CarryingCost";
import Card from "../../components/Card";
import { Divider } from "antd";
import { Link } from "react-router-dom";

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

      {/* CHART */}
      <div className="rounded-lg bg-white p-5 shadow max-md:w-[100%] md:col-span-3">
        <StockChart />
      </div>
      <div className="md:col-span-1">
        <Card>
          <h5 className="mb-2 text-lg font-semibold">Contacts</h5>
          <div>
            <hr />
            <div className="flex flex-row justify-between pt-5">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="My Contact"
                    className="size-12 rounded-full border object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Ayu</p>
                  <p className="text-sm font-light">0891289121</p>
                </div>
              </div>
              <div>
                <Link to="#">Lihat</Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="rounded-lg bg-white p-5 shadow max-md:w-[100%] md:col-span-2">
        <CarryingCostChart />
      </div>
    </section>
  );
};

export default Dashboard;

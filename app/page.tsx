'use client'

import { useState } from "react";

export default function AuctionRevenueCalculatorB() {
  const [upliftPercent, setUpliftPercent] = useState(5);

  const weeklyLots = 40000;
  const monthlyLots = weeklyLots * 4.3; // ≈172,000
  const avgLotValue = 34.15;
  const avgBidsPerLot = 10.88;

  const upliftMultiplier = 1 + upliftPercent / 100;
  const upliftedBidsPerLot = (avgBidsPerLot * upliftMultiplier).toFixed(2);
  const upliftedLotValue = avgLotValue * upliftMultiplier;

  const monthlyRevenueBefore = monthlyLots * avgLotValue;
  const monthlyRevenueAfter = monthlyLots * upliftedLotValue;
  const annualRevenueBefore = monthlyRevenueBefore * 12;
  const annualRevenueAfter = monthlyRevenueAfter * 12;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between mb-6">
        <img src="/johnpye-logo.png" alt="John Pye Logo" className="h-12" />
        <h2 className="text-xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & Sons
        </h2>
        <img src="/acoustic-logo.png" alt="Acoustic Logo" className="h-12" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Uplift in Average Bids per Lot (%): {upliftPercent}%
        </label>
        <input
          type="range"
          min={1}
          max={25}
          value={upliftPercent}
          onChange={(e) => setUpliftPercent(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Avg Bids per Lot</h3>
          <p className="text-lg font-semibold">
            {avgBidsPerLot} →{" "}
            <span className="text-green-600 font-semibold">
              {upliftedBidsPerLot}
            </span>
          </p>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">Avg Lot Value</h3>
          <p className="text-lg font-semibold">
            {formatCurrency(avgLotValue)} →{" "}
            <span className="text-green-600 font-semibold">
              {formatCurrency(upliftedLotValue)}
            </span>
          </p>
        </div>

        <div className="p-4 border rounded-lg col-span-2">
          <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
          <p className="text-lg font-semibold">
            {formatCurrency(monthlyRevenueBefore)} →{" "}
            <span className="text-green-600 font-semibold">
              {formatCurrency(monthlyRevenueAfter)}
            </span>
          </p>
        </div>

        <div className="p-4 border rounded-lg col-span-2">
          <h3 className="text-sm font-medium text-gray-500">Annual Revenue</h3>
          <p className="text-lg font-semibold">
            {formatCurrency(annualRevenueBefore)} →{" "}
            <span className="text-green-600 font-semibold">
              {formatCurrency(annualRevenueAfter)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

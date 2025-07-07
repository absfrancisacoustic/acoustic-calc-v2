'use client'

import { useState } from "react";

export default function AuctionRevenueCalculatorB() {
  const [upliftPercent, setUpliftPercent] = useState(5);

  const weeklyLots = 40000;
  const monthlyLots = weeklyLots * 4.3;
  const avgLotValue = 34.15;
  const avgBidsPerLot = 10.88;

  const upliftMultiplier = 1 + upliftPercent / 100;
  const upliftedBidsPerLot = (avgBidsPerLot * upliftMultiplier).toFixed(3);
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <img src="/johnpye-logo.png" alt="John Pye Logo" className="h-12" />
        <h2 className="text-xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & Sons
        </h2>
        <img src="/acoustic-logo.png" alt="Acoustic Logo" className="h-10" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Uplift From Personalisation (%): {upliftPercent}%
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

      <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-700 border-b pb-2 mb-2">
        <div>Metric</div>
        <div>Current</div>
        <div>Estimated With Connect</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm py-1 border-b">
        <div>Total Weekly Lots</div>
        <div>40,000</div>
        <div>40,000</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm py-1 border-b">
        <div>Average Bids Per Lot</div>
        <div>{avgBidsPerLot}</div>
        <div className="text-green-600 font-semibold">{upliftedBidsPerLot}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm py-1 border-b">
        <div>Average Lot Value</div>
        <div>{formatCurrency(avgLotValue)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(upliftedLotValue)}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm py-1 border-b">
        <div>Total Monthly Revenue</div>
        <div>{formatCurrency(monthlyRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(monthlyRevenueAfter)}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm py-1">
        <div>Total Annual Revenue</div>
        <div>{formatCurrency(annualRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(annualRevenueAfter)}</div>
      </div>
    </div>
  );
}

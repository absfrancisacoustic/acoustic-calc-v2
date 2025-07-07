'use client'

import { useState } from "react";

export default function AuctionRevenueCalculatorWithSources() {
  const [upliftPercent, setUpLiftPercent] = useState(5);

  const weeklyLots = 40000;
  const monthlyLots = weeklyLots * 4.3;
  const avgLotValue = 34.15;
  const avgBidsPerLot = 10.88;

  const upliftMultiplier = 1 + upliftPercent / 100;
  const upliftedBidsPerLot = (avgBidsPerLot * upliftMultiplier).toFixed(3);
  const upliftedLotValue = (avgLotValue * upliftMultiplier).toFixed(4);

  const monthlyRevenueBefore = monthlyLots * avgLotValue;
  const monthlyRevenueAfter = monthlyLots * parseFloat(upliftedLotValue);
  const annualRevenueBefore = monthlyRevenueBefore * 12;
  const annualRevenueAfter = monthlyRevenueAfter * 12;

  const upliftMonthly = monthlyRevenueAfter - monthlyRevenueBefore;
  const upliftAnnual = annualRevenueAfter - annualRevenueBefore;

  const formatCurrency = (value: number | string) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));

  const formatCurrency2dp = (value: number | string) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));

  return (
    <div className="max-w-7xl mx-auto p-12 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between mb-8 items-center">
        <img src="/johnpye.png" alt="John Pye Logo" className="h-16" />
        <h2 className="text-2xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & Sons
        </h2>
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-12" />
      </div>

      <div className="mb-8">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Uplift From Personalisation (%): {upliftPercent}%
        </label>
        <input
          type="range"
          min={1}
          max={25}
          value={upliftPercent}
          onChange={(e) => setUpLiftPercent(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-8 text-lg text-center mt-12">
        <div className="font-semibold text-gray-900">Metric</div>
        <div className="font-semibold text-gray-900">Current</div>
        <div className="font-semibold text-gray-900">Estimated With Connect</div>

        <div>Total Weekly Lots</div>
        <div className="font-semibold">40,000</div>
        <div className="font-semibold">40,000</div>

        <div>Average Bids Per Lot</div>
        <div className="font-semibold">{avgBidsPerLot}</div>
        <div className="text-green-600 font-semibold">{upliftedBidsPerLot}</div>

        <div>Average Lot Value</div>
        <div className="font-semibold">{formatCurrency2dp(avgLotValue)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency2dp(upliftedLotValue)}</div>

        <div>Total Monthly Revenue</div>
        <div className="font-semibold">{formatCurrency(monthlyRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(monthlyRevenueAfter)}</div>

        <div>Total Annual Revenue</div>
        <div className="font-semibold">{formatCurrency(annualRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(annualRevenueAfter)}</div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-16 text-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Monthly Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-xl">{formatCurrency(upliftMonthly)}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Annual Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-xl">{formatCurrency(upliftAnnual)}</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Uplift Benchmarks</h3>
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Source</th>
              <th className="px-4 py-2 border">Reported Uplift</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><a href="https://instapage.com/blog/personalization-statistics" target="_blank" className="text-blue-600 underline">Instapage</a></td>
              <td className="px-4 py-2 border">20% conversion rate increase (2023)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><a href="https://blog.contactpigeon.com/personalization-statistics/" target="_blank" className="text-blue-600 underline">ContactPigeon</a></td>
              <td className="px-4 py-2 border">10–20% increase in revenue (2024)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><a href="https://econsultancy.com/statistics/" target="_blank" className="text-blue-600 underline">Econsultancy</a></td>
              <td className="px-4 py-2 border">93% of companies see revenue growth with personalization</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><a href="https://www.mckinsey.com/business-functions/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying" target="_blank" className="text-blue-600 underline">McKinsey</a></td>
              <td className="px-4 py-2 border">10–15% increase in sales lift (2021)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><a href="https://go.forrester.com/blogs/category/personalization/" target="_blank" className="text-blue-600 underline">Forrester</a></td>
              <td className="px-4 py-2 border">Up to 33% lift in conversion (Retail, 2022)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

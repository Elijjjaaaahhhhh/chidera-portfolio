import macroMethodology from '../assets/macro-tracker-methodology.png'
import macroOil from '../assets/macro-tracker-oil.png'
import macroStress from '../assets/macro-tracker-stress.png'

import amazingExec from '../assets/amazing-grace-executive.png'
import amazingInventory from '../assets/amazing-grace-inventory.png'
import amazingPresentation from '../assets/amazing-grace-presentation.png'
import amazingSupply from '../assets/amazing-grace-supply.png'

import novaPayChecks from '../assets/novapay-checks.png'
import novaPayDCF from '../assets/novapay-dcf-output.png'
import novaPayConclusion from '../assets/novapay-memo-conclusion.png'
import novaPayMemo from '../assets/novapay-memo-summary.png'
import novaPayExec from '../assets/novapay-powerbi-exec.png'
import novaPayFinancial from '../assets/novapay-powerbi-financial.png'

const projects = [
  {
    id: 'nigeria-macro-tracker',
    category: 'Data Engineering · Automation · BI',
    title: 'Nigeria Macro Economic Tracker',
    subtitle: 'A live, automated dashboard tracking Nigeria\'s macroeconomic health across 7 key indicators with a composite Economic Stress Index.',
    coverImage: macroStress,
    duration: 'Ongoing — Live Product',
    role: 'Data Engineer · BI Developer',
    metrics: [
      { value: '7',      label: 'Indicators Tracked' },
      { value: '51.73',  label: 'Current Stress Score' },
      { value: 'AMBER',  label: 'Stress Band' },
    ],
    tools: ['Python', 'Power BI', 'Microsoft Fabric', 'GitHub Actions', 'CBN API', 'World Bank API'],
    links: {
      github: 'https://github.com/Elijjjaaaahhhhh/nigeria-macro-tracker/',
      live: 'https://app.powerbi.com/links/6r1cIiVavp?ctid=72ca12ad-1c5b-400e-a56e-de2f46920121&pbi_source=linkShare',
    },
    overview: 'A live, auto-refreshing macro intelligence dashboard tracking 7 Nigerian economic indicators via an automated Python pipeline pulling from real government APIs weekly. The dashboard features a composite Economic Stress Index (0–100) using min-max normalisation with GREEN/AMBER/RED stress bands, deployed on Microsoft Fabric with weekly scheduled refresh via GitHub Actions.',
    challenge: 'Nigeria\'s macroeconomic data is fragmented across multiple government sources — CBN, NBS, World Bank — with no single unified view of economic health. Analysts and decision-makers had no way to track composite stress across indicators without manually pulling and reconciling data from multiple portals each week.',
    solution: 'Built an end-to-end automated ETL pipeline using Python and GitHub Actions that fetches live data from CBN and World Bank APIs weekly, processes it into clean CSVs, and refreshes a 5-page Power BI report on Microsoft Fabric automatically. Designed a proprietary Economic Stress Index using min-max normalisation and weighted composite scoring across all 7 indicators.',
    results: [
      'Eliminated 100% of manual data entry for weekly updates',
      'Live stress score updated weekly without human intervention',
      'Composite index distinguishes GREEN, AMBER, and RED macro stress bands',
      '3-year historical series enabling trend analysis from 2020 to present',
      'Deployed as a live product on Microsoft Fabric — not a static file',
    ],
    screenshots: [macroStress, macroOil, macroMethodology],
  },
  {
    id: 'amazing-grace-bi',
    category: 'Business Intelligence · SQL · Power BI',
    title: 'Amazing Grace Thrift Store — BI Intelligence Suite',
    subtitle: 'Full-stack BI solution for a Lagos-based retail business. 22-table star schema, 30+ DAX measures, 8-page executive report with dual stakeholder dashboards.',
    coverImage: amazingExec,
    duration: 'FY 2025 Project',
    role: 'BI Analyst · Data Engineer',
    metrics: [
      { value: '₦413.22M', label: 'Total Revenue FY2025' },
      { value: '66.8%',    label: 'Gross Profit Margin' },
      { value: '98.98%',   label: 'Sell-Through Rate' },
    ],
    tools: ['SQL Server', 'Power BI', 'DAX', 'Power Query', 'Microsoft Fabric'],
    links: {
      github: 'https://github.com/Elijjjaaaahhhhh/amazing-grace-thrift-store-analytics',
      presentation: 'https://github.com/Elijjjaaaahhhhh/amazing-grace-thrift-store-analytics/blob/main/presentation/AmazingGrace_FY2025_Report.pptx',
      live: 'https://github.com/Elijjjaaaahhhhh/amazing-grace-thrift-store-analytics',
    },
    overview: 'A full-stack business intelligence solution built for a Lagos-based thrift store. The project covers everything from raw database design in SQL Server 2022 to a published Power BI report with 8 pages, 30+ DAX measures, and two stakeholder dashboards deployed on Microsoft Fabric with scheduled refresh.',
    challenge: 'The business had no structured data infrastructure — transactions were recorded manually with no schema, no reporting layer, and no visibility into what was actually driving revenue. The owner had no way to identify top customers, track inventory health, or understand seasonal patterns.',
    solution: 'Designed and built a 22-table star schema in SQL Server from scratch. Engineered 30+ DAX measures across beginner to advanced tiers. Built an 8-page executive report covering sales intelligence, inventory performance, staff metrics, supply chain health, and seasonal analysis. Implemented static and dynamic Row-Level Security for both Owner and Investor stakeholder views.',
    results: [
      'Identified ₦171.8M (41%) revenue growth opportunity from anonymous walk-in customers',
      'Flagged 2 suppliers below acceptable reliability threshold',
      'Revealed -34% sales period lift — promotional strategy needs rethinking',
      'November alone accounted for ₦131.9M — 32% of annual revenue',
      '98.98% sell-through rate confirmed near-zero dead stock problem',
    ],
    screenshots: [amazingExec, amazingInventory, amazingSupply, amazingPresentation],
  },
  {
    id: 'novapay-dcf',
    category: 'Financial Modelling · Investment Analysis',
    title: 'NovaPay DCF Valuation Model',
    subtitle: 'Investment-grade DCF valuation for a fictional Nigerian fintech calibrated to real market benchmarks. Fully integrated 3-statement model with Big 4 TAS investment memo.',
    coverImage: novaPayExec,
    duration: 'March 2026',
    role: 'Financial Modeller · Valuation Analyst',
    metrics: [
      { value: '₦8.24B', label: 'Base Case Equity Value' },
      { value: '26.4%',  label: 'WACC' },
      { value: '₦34.73B', label: 'Bull-Bear Range' },
    ],
    tools: ['Excel', 'SQL Server', 'Power BI', 'PowerPoint'],
    links: {
      github: 'https://github.com/Elijjjaaaahhhhh/novapay-dcf-valuation',
      presentation: 'https://github.com/Elijjjaaaahhhhh/novapay-dcf-valuation/blob/main/Presentation_Memo/NovaPay_Investment_Memo.pptx',
      live: 'https://app.powerbi.com/links/uqRckYTs8m?ctid=72ca12ad-1c5b-400e-a56e-de2f46920121&pbi_source=linkShare',
    },
    overview: 'Investment-grade DCF valuation model for NovaPay Financial Services Limited — a fictional Nigerian fintech calibrated to real market benchmarks. Built to demonstrate end-to-end financial modelling and data engineering capability across Excel, SQL Server, Power BI, and PowerPoint. Targets Investment Banking M&A and Big 4 Transaction Advisory Services roles.',
    challenge: 'Nigerian fintech valuation requires navigating a high-risk-free rate environment (CBN T-bill at 16.5%), significant country risk premium, and binary credit risk dynamics where NPL ratio can swing equity value from strongly positive to deeply negative. Standard valuation frameworks built for mature markets don\'t translate directly.',
    solution: 'Built a fully integrated 3-statement financial model (P&L, Balance Sheet, Cash Flow) with IFRS 9-compliant loan loss provisioning. Calculated WACC of 26.4% from first principles using CBN 364-day T-bill rate, 1.35 fintech beta, and Nigeria country risk premium. Built a SQL Server data layer with three-schema architecture feeding a 4-page Power BI dashboard. Delivered a 7-slide investment memo in Big 4 TAS format.',
    results: [
      'Base case equity value ₦8.24B (USD 5.32M) — fully integrated model',
      'WACC of 26.4% derived from first principles — every input cited to source',
      'NPL ratio identified as primary value driver — equity turns negative above 7.5%',
      'Bull/Base/Bear scenario range of ₦34.73B demonstrates binary credit risk',
      'Model integrity dashboard — all checks green before DCF proceeds',
    ],
    screenshots: [novaPayExec, novaPayDCF, novaPayFinancial, novaPayMemo, novaPayChecks, novaPayConclusion],
  },
]

export default projects
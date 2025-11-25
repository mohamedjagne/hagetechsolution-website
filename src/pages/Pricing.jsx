import { useMemo, useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const [basicInfo, setBasicInfo] = useState({
    companies: 0,
    branches: 0,
    currencies: 0,
    users: 0,
  });

  const [integrations, setIntegrations] = useState({
    sms: false,
    whatsapp: false,
    paymentGateway: false,
    biometrics: false,
  });

  const [modules, setModules] = useState({
    salesCRM: false,
    humanResources: false,
    finance: false,
    pointOfSale: false,
    realEstate: false,
    hospital: false,
    logistics: false,
    microfinance: false,
    insurance: false,
    website: false,
    supply: false,
    manufacturing: false,
    electricityWater: false,
  });

  const [services, setServices] = useState({
    businessAnalysis: false,
    dataMigration: false,
    customizations: false,
  });

  const integratorConfig = [
    { id: "sms", label: "SMS", description: "SMS notifications", cost: 1500 },
    {
      id: "whatsapp",
      label: "WhatsApp",
      description: "WhatsApp messaging",
      cost: 1500,
    },
    {
      id: "paymentGateway",
      label: "Payment Gateway",
      description: "Payment processing",
      cost: 2000,
    },
    {
      id: "biometrics",
      label: "Biometrics",
      description: "Biometric authentication",
      cost: 1800,
    },
  ];

  const moduleConfig = [
    {
      id: "salesCRM",
      label: "Sales & CRM",
      description: "Sales, Invoicing, Subscriptions, Rental, CRM",
    },
    {
      id: "website",
      label: "Website",
      description: "Website, Ecommerce, Forum",
    },
    {
      id: "humanResources",
      label: "Human Resources",
      description: "Recruitment, Time Off, Appraisals, Expenses",
    },
    {
      id: "supply",
      label: "Supply Chain",
      description: "Procurements, Inventory",
    },
    {
      id: "finance",
      label: "Finance",
      description: "Accounting, Expenses, Consolidation, Asset, & Analytics",
    },
    {
      id: "manufacturing",
      label: "Manufacturing",
      description: "MRP, PLM, Quality, Maintenance",
    },
    {
      id: "pointOfSale",
      label: "Point of Sale",
      description: "Shop, Restaurants",
    },
    {
      id: "electricityWater",
      label: "Electricity & Water",
      description: "Utility Billing, Meter Management, Consumption Reports",
    },
    {
      id: "realEstate",
      label: "Real Estate & Construction",
      description:
        "Property Management, Work Orders, Planners, Project Reports & Dashboards",
    },
    {
      id: "hospital",
      label: "Hospital",
      description: "Patients, Physicians, Lab, Insurance & more",
    },
    {
      id: "logistics",
      label: "Logistics",
      description: "Fleet Management, Route Planning, Shipping",
    },
    {
      id: "microfinance",
      label: "Microfinance",
      description: "Loans, Repayments, Savings, Interest Management",
    },
    {
      id: "insurance",
      label: "Insurance",
      description: "Policies, Claims, Premiums, Renewals",
    },
  ];

  const serviceConfig = [
    {
      id: "businessAnalysis",
      label: "Business Analysis",
      description:
        "Process mapping, requirements gathering, and solution design.",
      cost: 2500,
    },
    {
      id: "dataMigration",
      label: "Data Migration",
      description: "Import and validation of your legacy system data.",
      cost: 3000,
    },
    {
      id: "customizations",
      label: "Customizations",
      description: "Custom forms, reports, and workflow adjustments.",
      cost: 2000,
    },
  ];

  const cost = useMemo(() => {
    let total = 0;

    total += Math.max(basicInfo.companies, 0) * 500;
    total += Math.max(basicInfo.branches, 0) * 300;
    total += Math.max(basicInfo.currencies, 0) * 200;
    total += Math.max(basicInfo.users, 0) * 100;

    total += integratorConfig
      .filter((item) => integrations[item.id])
      .reduce((sum, item) => sum + item.cost, 0);

    const selectedModuleCount = Object.values(modules).filter(Boolean).length;
    total += selectedModuleCount * 1200;

    total += serviceConfig
      .filter((item) => services[item.id])
      .reduce((sum, item) => sum + item.cost, 0);

    return total;
  }, [basicInfo, integrations, modules, services]);

  const hoursEstimate = useMemo(
    () => Math.max(40, Math.round(cost / 50)),
    [cost]
  );

  const numericInput = (key) => (event) => {
    const value = Number.parseInt(event.target.value, 10);
    setBasicInfo((prev) => ({
      ...prev,
      [key]: Number.isNaN(value) ? 0 : Math.max(0, value),
    }));
  };

  return (
    <main className="bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[var(--primary)]/5 to-transparent border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
            Implementation Estimator
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Configure your Odoo ERP implementation and get instant pricing based
            on your specific requirements.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-sm text-[var(--muted-foreground)]">
                A successful implementation requires analysis of your business
                needs, configuration, training and coaching of your key users,
                import of your data and customization of the business flows.
              </p>

              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                  Basic Info
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Number of Companies
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={basicInfo.companies}
                      onChange={numericInput("companies")}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Number of Branches
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={basicInfo.branches}
                      onChange={numericInput("branches")}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Number of Currencies
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={basicInfo.currencies}
                      onChange={numericInput("currencies")}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Users to be Trained
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={basicInfo.users}
                      onChange={numericInput("users")}
                      className="w-full px-3 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                  Integrations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integratorConfig.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={integrations[item.id]}
                        onChange={(event) =>
                          setIntegrations((prev) => ({
                            ...prev,
                            [item.id]: event.target.checked,
                          }))
                        }
                        className="w-4 h-4 accent-[var(--primary)]"
                      />
                      <div>
                        <div className="font-medium text-[var(--foreground)]">
                          {item.label}
                        </div>
                        <div className="text-xs text-[var(--muted-foreground)]">
                          {item.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                  Modules / Apps
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-4">
                  These are optional services that can be added to your project
                  based on your needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {moduleConfig.map((module) => (
                    <label
                      key={module.id}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={modules[module.id]}
                        onChange={(event) =>
                          setModules((prev) => ({
                            ...prev,
                            [module.id]: event.target.checked,
                          }))
                        }
                        className="w-4 h-4 mt-1 accent-[var(--primary)]"
                      />
                      <div>
                        <div className="font-medium text-[var(--foreground)] text-sm">
                          {module.label}
                        </div>
                        <div className="text-xs text-[var(--muted-foreground)]">
                          {module.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                  Implementation Services
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-4">
                  These are optional services that can be added to your project
                  based on your needs.
                </p>
                <div className="space-y-3">
                  {serviceConfig.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={services[service.id]}
                        onChange={(event) =>
                          setServices((prev) => ({
                            ...prev,
                            [service.id]: event.target.checked,
                          }))
                        }
                        className="w-4 h-4 mt-1 accent-[var(--primary)]"
                      />
                      <div>
                        <div className="font-medium text-[var(--foreground)]">
                          {service.label}
                        </div>
                        <div className="text-xs text-[var(--muted-foreground)]">
                          {service.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:col-span-1">
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--muted)]/50 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-4">
                    Project Cost
                  </h3>
                  <div className="pb-6 border-b border-[var(--border)]">
                    <p className="text-3xl font-bold text-[var(--primary)]">
                      ${cost.toLocaleString()}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-2">
                      90% of projects within this scope are in production in{" "}
                      {hoursEstimate} hours or less.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  {basicInfo.companies > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Companies ({basicInfo.companies})
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        ${(basicInfo.companies * 500).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {basicInfo.branches > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Branches ({basicInfo.branches})
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        ${(basicInfo.branches * 300).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {basicInfo.currencies > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Currencies ({basicInfo.currencies})
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        ${(basicInfo.currencies * 200).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {basicInfo.users > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        User Training ({basicInfo.users})
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        ${(basicInfo.users * 100).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {integratorConfig.some((item) => integrations[item.id]) && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Integrations (
                        {
                          integratorConfig.filter(
                            (item) => integrations[item.id]
                          ).length
                        }
                        )
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        $
                        {integratorConfig
                          .filter((item) => integrations[item.id])
                          .reduce((sum, item) => sum + item.cost, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  )}

                  {Object.values(modules).some(Boolean) && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Modules ({Object.values(modules).filter(Boolean).length}
                        )
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        $
                        {(
                          Object.values(modules).filter(Boolean).length * 1200
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {serviceConfig.some((item) => services[item.id]) && (
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">
                        Services (
                        {
                          serviceConfig.filter((item) => services[item.id])
                            .length
                        }
                        )
                      </span>
                      <span className="font-medium text-[var(--foreground)]">
                        $
                        {serviceConfig
                          .filter((item) => services[item.id])
                          .reduce((sum, item) => sum + item.cost, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <Button className="w-full flex items-center justify-center gap-2 bg-[var(--primary-foreground)] text-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary-foreground)]/90 px-6 py-3 rounded-lg">
                  <Link
                    className="inline-flex items-center gap-2"
                    to="/contact"
                  >
                    Get Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

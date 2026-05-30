import { useState } from "react";

export default function ProductTabs({ tabsData }) {
  const [activeTab, setActiveTab] = useState("sobre_este_producto");

  if (!tabsData) return null;

  return (
    <div className="mt-12 w-full">
      {/* Tab Headers */}
      <div className="flex items-center gap-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("sobre_este_producto")}
          className={`py-4 text-sm font-bold transition-colors relative ${
            activeTab === "sobre_este_producto" 
              ? "text-brand-text-main" 
              : "text-brand-text-muted hover:text-brand-text-main"
          }`}
        >
          Sobre este producto
          {activeTab === "sobre_este_producto" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"></div>
          )}
        </button>
        
        <button
          onClick={() => setActiveTab("especificaciones")}
          className={`py-4 text-sm font-bold transition-colors relative ${
            activeTab === "especificaciones" 
              ? "text-brand-text-main" 
              : "text-brand-text-muted hover:text-brand-text-main"
          }`}
        >
          Especificaciones
          {activeTab === "especificaciones" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"></div>
          )}
        </button>

        <button
          onClick={() => setActiveTab("garantia")}
          className={`py-4 text-sm font-bold transition-colors relative ${
            activeTab === "garantia" 
              ? "text-brand-text-main" 
              : "text-brand-text-muted hover:text-brand-text-main"
          }`}
        >
          Garantía
          {activeTab === "garantia" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"></div>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === "sobre_este_producto" && tabsData.sobre_este_producto && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-bold text-lg mb-4 text-brand-text-main">
              {tabsData.sobre_este_producto.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-sm">
              {tabsData.sobre_este_producto.description}
            </p>
          </div>
        )}

        {activeTab === "especificaciones" && tabsData.especificaciones && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabsData.especificaciones.map((spec, idx) => (
                <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm font-medium">{spec.label}</span>
                  <span className="text-brand-text-main font-bold text-sm text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "garantia" && tabsData.garantia && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="text-gray-600 leading-relaxed text-sm">
              {tabsData.garantia}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

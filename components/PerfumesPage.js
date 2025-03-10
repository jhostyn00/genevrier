"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const marcasDisponibles = [
  "Anna Sui", "Carolina Herrera", "Chanel", "Chloé", "Clinique", "Dior", "DKNY", "Dolce & Gabbana", "Estée Lauder",
  "Givenchy", "Gucci", "Hugo Boss", "Issey Miyake", "Jean Paul Gaultier", "Jimmy Choo", "Juicy Couture", "Kenzo",
  "Lancôme", "Lolita Lempicka", "Marc Jacobs", "Mont Blanc", "Moschino", "Narciso Rodriguez", "Nina Ricci",
  "Paco Rabanne", "Perry Ellis", "Ralph Lauren", "Salvatore Ferragamo", "Tiffany & Co", "Tom Ford", "Versace",
  "Yves Saint Laurent"
].sort();

const PerfumesPage = () => {
  const [query, setQuery] = useState("");
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [filtroGenero, setFiltroGenero] = useState("Todos");
  const [filtroMarca, setFiltroMarca] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const productosPerPage = 8;
  const productosContainerRef = useRef(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setFilteredProductos(data);
      });
  }, []);

  useEffect(() => {
    filtrarProductos(false);
  }, [filtroGenero, filtroMarca]);

  const filtrarProductos = (desdeBuscador) => {
    let filtered = productos;

    if (desdeBuscador && query.trim() !== "") {
      filtered = filtered.filter((producto) =>
        producto.nombre.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filtroGenero !== "Todos") {
      filtered = filtered.filter((producto) => producto.genero === filtroGenero);
    }

    if (filtroMarca !== "Todas") {
      filtered = filtered.filter((producto) =>
        producto.nombre.toLowerCase().includes(filtroMarca.toLowerCase())
      );
    }

    setFilteredProductos(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filtrarProductos(true);
    setQuery("");
  };

  const indexOfLastProducto = currentPage * productosPerPage;
  const indexOfFirstProducto = indexOfLastProducto - productosPerPage;
  const currentProductos = filteredProductos.slice(indexOfFirstProducto, indexOfLastProducto);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    productosContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="perfumes" ref={productosContainerRef} className="bg-[#f8f8f8] min-h-screen">
      {/* Filtros */}
      <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg shadow-md md:flex-row md:space-x-4 md:space-y-0">
        <form onSubmit={handleSubmit} className="relative flex w-full max-w-md">
          <input
            type="text"
            placeholder="Encuentra Tu Fragancia"
            value={query}
            onChange={handleSearch}
            className="w-full py-3 pl-4 pr-12 text-black placeholder-gray-400 border border-gray-300 rounded-l-full shadow-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 text-white transition duration-300 bg-black rounded-r-full hover:bg-gray-800"
          >
            <FaSearch />
          </button>
        </form>

        <select
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
          className="px-4 py-3 text-black bg-white border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-black focus:outline-none"
        >
          <option value="Todos">Todos</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <select
          value={filtroMarca}
          onChange={(e) => setFiltroMarca(e.target.value)}
          className="px-4 py-3 text-black bg-white border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-black focus:outline-none"
        >
          <option value="Todas">Todas las marcas</option>
          {marcasDisponibles.map((marca) => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </select>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProductos.map((producto) => (
          <div
            key={producto.codigo}
            className="p-4 transition duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            onClick={() => setSelectedProducto(producto)}
          >
            <img
              src={producto.referencia}
              alt={producto.nombre}
              className="object-cover w-full h-auto rounded-md"
            />
            <h3 className="mt-2 text-xl font-bold text-black">{producto.nombre}</h3>
            <p className="text-gray-600">{producto.tendencia_olfativa}</p>
            <p className="mt-2 text-xl font-bold text-gray-700">Precio base: S/35.0</p>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(filteredProductos.length / productosPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 rounded-lg shadow-md transition duration-300 ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal de Producto */}
      {selectedProducto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 text-black bg-white rounded-lg shadow-lg">
            <p className="text-sm text-gray-500">Código: {selectedProducto.codigo}</p>
            <img src={selectedProducto.referencia} alt={selectedProducto.nombre} className="w-full h-auto mb-4 rounded-md" />
            <h2 className="text-2xl font-bold">{selectedProducto.nombre}</h2>
            <p>Género: {selectedProducto.genero}</p>
            <p>Tendencia Olfativa: {selectedProducto.tendencia_olfativa}</p>
            <p>Componentes: {selectedProducto.componentes.join(", ")}</p>
            <p>Precio: S/35.0</p>
            <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded" onClick={() => setSelectedProducto(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumesPage;

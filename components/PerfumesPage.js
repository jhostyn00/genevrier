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

  useEffect(() => {
    if (productosContainerRef.current) {
      productosContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  useEffect(() => {
    if (selectedProducto) {
      document.body.style.overflow = "hidden"; // Deshabilita el scroll al abrir el modal
    } else {
      document.body.style.overflow = ""; // Habilita el scroll al cerrar el modal
    }
  }, [selectedProducto]);

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

  const totalPages = Math.ceil(filteredProductos.length / productosPerPage);
  const indexOfLastProducto = currentPage * productosPerPage;
  const indexOfFirstProducto = indexOfLastProducto - productosPerPage;
  const currentProductos = filteredProductos.slice(indexOfFirstProducto, indexOfLastProducto);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div id="perfumes" ref={productosContainerRef} className="bg-[#f8f8f8] min-h-screen p-4">
    {/* Filtros */}
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="relative flex w-full max-w-md">
        <input
          type="text"
          placeholder="Encuentra Tu Fragancia"
          value={query}
          onChange={handleSearch}
          className="w-full py-3 pl-4 pr-12 text-black border border-gray-300 rounded-l-full focus:ring-2 focus:ring-black focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 text-white bg-black rounded-r-full hover:bg-gray-800"
        >
          <FaSearch />
        </button>
      </form>

      <select
        value={filtroGenero}
        onChange={(e) => setFiltroGenero(e.target.value)}
        className="p-2 text-black border border-gray-300 rounded-full "
      >
        <option value="Todos">Todos</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>

      <select
        value={filtroMarca}
        onChange={(e) => setFiltroMarca(e.target.value)}
        className="p-2 text-black border border-gray-300 rounded-full"
      >
        <option value="Todas">Todas las marcas</option>
        {marcasDisponibles.map((marca) => (
          <option key={marca} value={marca}>{marca}</option>
        ))}
      </select>
      
    </div>

      {/* Productos */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProductos.map((producto) => (
          <div key={producto.codigo} className="p-4 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedProducto(producto)}>
            <img src={producto.referencia} alt={producto.nombre} className="w-full h-auto rounded-md" />
            <h3 className="mt-2 text-lg font-bold text-black">{producto.nombre}</h3>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {/* Paginación Minimalista */}
<div className="relative flex flex-wrap justify-center w-full max-w-full gap-1 mt-6 overflow-x-auto">
  <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}
    className="px-2 py-1 text-sm text-black bg-white border rounded-md hover:bg-gray-100 disabled:opacity-50">
    «
  </button>

  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    if (page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1) {
      return (
        <button key={page} onClick={() => goToPage(page)}
          className={`px-2 py-1 text-sm border rounded-md ${page === currentPage ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}>
          {page}
        </button>
      );
    } else if (page === currentPage - 2 || page === currentPage + 2) {
      return <span key={page} className="px-1 py-1 text-gray-500">...</span>;
    }
    return null;
  })}

  <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}
    className="px-2 py-1 text-sm text-black bg-white border rounded-md hover:bg-gray-100 disabled:opacity-50">
    »
  </button>
</div>

      {/* Modal de Producto */}
      {selectedProducto && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-6 bg-white rounded-lg w-96">
            <button className="absolute text-black top-2 right-2" onClick={() => setSelectedProducto(null)}>✖</button>
            <img src={selectedProducto.referencia} alt={selectedProducto.nombre} className="w-full h-auto rounded-md" />
            <h2 className="mt-2 text-lg font-bold text-black">{selectedProducto.nombre}</h2>            
            <p className="font-semibold text-black">Código: <span>{selectedProducto.codigo}</span></p>
            <p className="font-semibold text-black">Precio Base: <span>S/.35</span></p>
            <p className="font-semibold text-black">Género: <span>{selectedProducto.genero}</span></p>
            <p className="font-semibold text-black">Tendencia olfativa: <span>{selectedProducto.tendencia_olfativa}</span></p>
            <p className="font-semibold text-black">Componentes: <span>{selectedProducto.componentes.join(", ")}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumesPage;

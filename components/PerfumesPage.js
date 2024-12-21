"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Iconos de flechas

const PerfumesPage = () => {
  const [query, setQuery] = useState("");
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Cuántos productos por página

  // Cargar productos desde el JSON
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setFilteredProductos(data); // Mostrar todos los productos inicialmente
      });
  }, []);

  // Filtrar productos cuando el usuario escribe
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProductos(filtered);
    setCurrentPage(1); // Volver a la primera página al buscar
  };

  // Cerrar el modal
  const closeModal = () => setSelectedProducto(null);

  // Manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Obtener los productos para la página actual
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProductos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);

  return (
    <div>
      {/* Buscador */}
      <div className="flex items-center justify-center p-4 ">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Encuentra Tu Fragancia"
            value={query}
            onChange={handleSearch}
            className="w-full py-3 pl-4 pr-12 text-black placeholder-gray-400 rounded-full shadow-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button className="absolute flex items-center justify-center w-10 h-10 text-white transition -translate-y-1/2 bg-black rounded-full right-3 top-1/2 hover:bg-gray-800">
            <span className="text-lg font-bold">→</span>
          </button>
        </div>
      </div>

      {/* Tarjetas de Productos */}
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((producto) => (
            <div
              key={producto.codigo}
              className="p-4 bg-white rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProducto(producto)}
            >
              <img
                src={producto.referencia}
                alt={producto.nombre}
                className="object-cover w-full h-auto rounded-md"
              />
              <h3 className="mt-2 text-lg font-bold">{producto.nombre}</h3>
              <p className="text-sm text-gray-500">{producto.tendencia_olfativa}</p>
              <p className="mt-2 font-bold text-gray-700">
                Precio: $ {producto.venta_500}.00
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No se encontraron productos
          </p>
        )}
      </div>

      {/* Paginación Elegante */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        {/* Botón de "Anterior" */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center p-2 text-xl text-gray-700 bg-gray-200 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          <FaChevronLeft />
        </button>

        {/* Número de Página */}
        <span className="text-lg font-semibold text-gray-700">
          Página {currentPage} de {totalPages}
        </span>

        {/* Botón de "Siguiente" */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center p-2 text-xl text-gray-700 bg-gray-200 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      {selectedProducto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            {/* Botón de Cerrar (X) */}
            <button
              onClick={closeModal}
              className="absolute text-3xl text-gray-700 top-2 right-2 hover:text-red-500"
            >
              ✖
            </button>

            {/* Imagen */}
            <img
              src={selectedProducto.referencia}
              alt={selectedProducto.nombre}
              className="object-cover w-full h-48 rounded-md"
            />

            {/* Título */}
            <h2 className="mt-4 text-2xl font-bold">{selectedProducto.nombre}</h2>

            {/* Información */}
            <p className="mt-2 text-sm text-gray-600">
              Género: {selectedProducto.genero}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Tendencia Olfativa: {selectedProducto.tendencia_olfativa}
            </p>

            {/* Componentes */}
            <ul className="mt-4 text-sm text-gray-600">
              <li className="font-bold">Componentes:</li>
              {selectedProducto.componentes.map((componente, index) => (
                <li key={index}>- {componente}</li>
              ))}
            </ul>

            {/* Precios */}
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-700">Precios:</p>
              <p className="text-gray-700">30ml: $ {selectedProducto.venta_300}.00</p>
              <p className="text-gray-700">50ml: $ {selectedProducto.venta_500}.00</p>
              <p className="text-gray-700">100ml: $ {selectedProducto.venta_700}.00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumesPage;

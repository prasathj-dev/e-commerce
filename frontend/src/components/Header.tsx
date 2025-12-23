import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../features/cart/api/cartAPI';
import type { CartItem } from '../features/cart/types/cartItem';
import { useState } from 'react';
import { FaBeer, FaSearch } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const { data: carts, isLoading, error } = useQuery<CartItem[]>({
        queryFn: () => fetchCart(),
        queryKey: ['cart']
    })

    const cartQuantityCount = carts?.reduce((acc, item) => acc + item.quantity, 0)



    return (
        <>
            <nav className="font-mono fixed w-[calc(100%-2rem)] md:w-full z-50 top-4 left-1/2 -translate-x-1/2 
    max-w-5xl px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-emerald-800 shadow-lg rounded-xl">

                <div className="relative flex items-center justify-between h-14 md:h-16">

                    {/* LEFT — LOGO */}
                    <div className="shrink-0 text-white font-bold text-xl">
                        <Link to="/" className="flex items-center space-x-2">
                            <h2 className="text-2xl font-semibold">EasyShop</h2>
                        </Link>
                    </div>

                    {/* CENTER — SEARCH BAR (ABSOLUTE CENTERED) Mobile*/}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-full max-w-lg">
                        <div className="flex w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="
                                    w-full px-4 py-2 pr-12
                                    rounded-2xl
                                    bg-emerald-900 text-white placeholder-gray-400
                                    border border-transparent
                                    focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-emerald-900
                                    transition-colors duration-200
                                "
                            />

                            {/* Search button inside input */}
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1  hover:bg-green-600 rounded-full flex items-center justify-center">
                                <FaSearch className="h-5 w-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT — ORDERS + CART */}
                    <div className="flex items-center space-x-6 text-white">

                        <a href="orders" className="hover:text-blue-400 transition hidden md:block">
                            <span className="text-lg">Orders</span>
                        </a>

                        <a href="checkout" className="relative flex items-center hover:text-blue-400 transition">
                            <img className="h-6 w-6" src="images/icons/cart-icon.png" alt="cart" />
                            <div className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold 
            rounded-full h-5 w-5 flex items-center justify-center">
                                {cartQuantityCount}
                            </div>
                            <span className="ml-2 text-lg hidden md:block">Cart</span>
                        </a>

                        {/* MOBILE HAMBURGER */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-gray-700 transition"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden mt-3 space-y-3 pb-3">

                        {/* Mobile Search */}
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 px-4 py-2 rounded-bl-2xl rounded-tl-2xl bg-emerald-900 text-white placeholder-gray-400 
                                           focus:outline-none "
                            />
                            <button className="px-4 py-2 bg-emerald-900 hover:bg-green-700 rounded-br-2xl rounded-tr-2xl flex items-center justify-center">
                                <FaSearch className="h-5 w-5 text-gray-100" />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <a href="orders" className="block text-white text-lg hover:text-blue-400">Orders</a>
                        <a href="checkout" className="block text-white text-lg hover:text-blue-400">Cart</a>
                    </div>
                )}
            </nav>

            {/* <nav className="font-mono
               fixed w-[calc(100%-2rem)] sm:w-auto md:w-full z-50 top-4 left-1/2 -translate-x-1/2 max-w-5xl px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-green-900/90 shadow-lg rounded-xl md:rounded-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

            <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <h2 className="text-2xl font-semibold">EasyShop</h2>
                </Link>
            </div>

            <div className="flex flex-1 max-w-xl mx-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md flex items-center justify-center">
                    <img
                        className="h-5 w-5"
                        src="images/icons/search-icon.png"
                        alt="search"
                    />
                </button>
            </div>

            
        </div >
            </nav > */
            }

        </>
    );
}

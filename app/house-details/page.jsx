import React from 'react';
import 'tailwindcss/tailwind.css';

const HouseDetails = () => {
 return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            APARTMENT HUNT
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Property Name
              </label>
              <p className="mt-1 block w-full text-gray-700">
                Family Apartment Three
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Property Address
              </label>
              <p className="mt-1 block w-full text-gray-700">
                Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price Details
              </label>
              <p className="mt-1 block w-full text-gray-700">
                $256 per month (negotiable)
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Property Details
              </label>
              <ul className="mt-1 block w-full text-gray-700">
                <li>3000 sq-ft</li>
                <li>3 Bedroom</li>
                <li>Semi-furnished</li>
                <li>Luxurious</li>
                <li>South facing</li>
              </ul>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Service Charge
              </label>
              <p className="mt-1 block w-full text-gray-700">
                8,000/= Tk per month, subject to change
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Security Deposit
              </label>
              <p className="mt-1 block w-full text-gray-700">
                3 month's rent
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Flat Release Policy
              </label>
              <p className="mt-1 block w-full text-gray-700">
                3 months earlier notice required
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
 );
};

export default HouseDetails;
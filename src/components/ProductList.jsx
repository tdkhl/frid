import React from 'react';

import Produit1 from '../assets/products/1.jpg';
import Basket from '../assets/products/basket.png';

function ProductList() {
    return (
      <div className="container mx-auto px-4">
        <div className="mt-4 pt-5 pb-5  mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {/* Remplacez les éléments ci-dessous par vos produits */}
          <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-between relative mb-5 hover:scale-105">
            <img src={Produit1} alt="Produit 1" className="w-full mb-2" />
            <p className="text-md lg:mb-2 mt-1 text-slate-950">Crème à l'Argile de Coco</p>
            <p className='text-sm lg:mb-1 text-left text-slate-400 invisible lg:visible'>Faite à partir de nos Noix de Tom élevées en pleine air..</p>
            <p className='text-sm mb-1 text-left text-slate-700'>9,99$</p>

          </div>
          <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-between relative mb-5 overflow-hidden hover:scale-105">
            <img src={Produit1} alt="Produit 1" className="w-full mb-2" />
            <p className="text-md lg:mb-2 mt-1 text-slate-950">Pommage à l'Origan</p>
            <p className='text-sm lg:mb-1 text-left text-slate-400 invisible lg:visible'>Hehe..</p>
            <p className='text-sm mb-1 text-left text-slate-700'>5,99$</p>
          </div>
          <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-between relative mb-5 hover:scale-105">
            <img src={Produit1} alt="Produit 1" className="w-full mb-2" />
            <p className="text-md lg:mb-2 mt-1 text-slate-950">Spray à l'ail</p>
            <p className='text-sm lg:mb-1 text-left text-slate-400 invisible lg:visible'>Pour faire repousser les cheveux..</p>
            <p className='text-sm mb-1 text-left text-slate-700'>13,99$</p>
          </div>
        </div>
      </div>
    );
  }

export default ProductList;
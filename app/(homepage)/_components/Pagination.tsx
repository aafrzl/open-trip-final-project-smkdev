'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Pagination() {
  const [pages, setPages] = useState(['1', '2', '3', , '...', '8', '9', '10']);
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <div className="mx-auto mt-12 px-4 text-gray-600 md:px-8 w-full">
      <div className="hidden items-center justify-end text-sm md:flex">
        <div
          className="flex items-center gap-12"
          aria-label="Pagination">
          <Link
            href={'/destinasi'}
            className="hover:text-main">
            <ArrowLeft />
          </Link>
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item}>
                {item == '...' ? (
                  <div>{item}</div>
                ) : (
                  <Link
                    href={'/destinasi'}
                    aria-current={currentPage == item ? 'page' : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-main ${
                      currentPage == item
                        ? 'bg-main text-white font-medium'
                        : ''
                    }`}>
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={'/destinasi'}
            className="hover:text-main">
            <ArrowRight />
          </Link>
          <div>SHOWING 1-10 OF 120</div>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <Link
          href={'/destinasi'}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Previous
        </Link>
        <div className="font-medium">SHOWING 1-10 OF 120</div>
        <Link
          href={'/destinasi'}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Next
        </Link>
      </div>
    </div>
  );
}

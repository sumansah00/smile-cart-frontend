import { useState } from "react";

import Carousel from "./Carousel";
import { IMAGE_URLS } from "./constants";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="px-6 pb-6">
      <div>
        <p className="py-2 text-4xl font-semibold">Infinix INBOOK</p>
        <hr className="border-2 border-black" />
      </div>
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          <Carousel
            currentIndex={currentIndex}
            imageUrls={IMAGE_URLS}
            setCurrentIndex={setCurrentIndex}
            title="Infinix Inbook"
          />
          {/* <div className="mt-4 flex justify-center">
            {IMAGE_URLS.map((_, index) => (
              <span
                className="neeto-ui-border-black neeto-ui-rounded-full h-3 w-3 cursor-pointer border"
                key={index}
              />
            ))}
          </div> */}
        </div>
        <div className="w-3/5 space-y-4">
          <p>
            Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year
            Warranty.
          </p>
          <p>MRP: $395.97</p>
          <p className="font-semibold">Offer price: $374.43</p>
          <p className="font-semibold text-green-600">6% off</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

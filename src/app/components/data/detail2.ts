import { StaticImageData } from "next/image";
// import p1 from "../../../../public/product/p (1).jpg";
// import p2 from "../../../../public/product/p (2).jpg";
// import p3 from "../../../../public/product/p (3).jpg";
// import p4 from "../../../../public/product/p (4).jpg";
// import p5 from "../../../../public/product/p (5).jpg";
// import p6 from "../../../../public/product/p (6).jpg";
// import p7 from "../../../../public/product/p (7).jpg";
// import p8 from "../../../../public/product/p (8).jpg";
// import p9 from "../../../../public/product/p (9).jpg";
// import p10 from "../../../../public/product/p (10).jpg";
// import p11 from "../../../../public/product/p (11).jpg";
// import p12 from "../../../../public/product/p (12).jpg";
// import p13 from "../../../../public/product/p (13).jpg";
// import p14 from "../../../../public/product/p (14).jpg";
// import p15 from "../../../../public/product/p (15).jpg";
// import p16 from "../../../../public/product/p (16).jpg";
// import p17 from "../../../../public/product/p (17).jpg";
// import p18 from "../../../../public/product/p (18).jpg";
// import p19 from "../../../../public/product/p (19).jpg";
// import p20 from "../../../../public/product/p (20).jpg";
// import p21 from "../../../../public/product/p (21).jpg";
// import p22 from "../../../../public/product/p (22).jpg";
// import p23 from "../../../../public/product/p (23).jpg";
// import p24 from "../../../../public/product/p (24).jpg";
// import p25 from "../../../../public/product/p (25).jpg";
// import p26 from "../../../../public/product/p (26).jpg";
// import p27 from "../../../../public/product/p (27).jpg";
// import p28 from "../../../../public/product/p (28).jpg";
// import p29 from "../../../../public/product/p (29).jpg";
// import p30 from "../../../../public/product/p (30).jpg";

export interface ProductDetail {
  id: string; // Alphanumeric ID
  name: string;
  description: string;
  price: string | number; // Flexible price type
  imageUrl: string | StaticImageData; // Supports both static and dynamic images
  category?: "men" | "women"; // Optional category for categorization
  deal: string; // Deal information (color orange can be handled in UI)
}

export const products: ProductDetail[] = [
  {
    id: "P001",
    name: "Nike Air Force 1 Mid",
    description: "Men's Shoe",
    price: "$13.99",
    imageUrl: "/product/p (1).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P002",
    name: "Nike Court Vision Low Next Nature",
    description: "Men's Shoes",
    price: "₹4,995.00",
    imageUrl: "/product/p (2).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P003",
    name: "Nike Air Force 1 Platform",
    description: "Women's Shoe",
    price: "$8695.00",
    imageUrl: "/product/p (3).jpg",
    category: "men",
    deal: "15% OFF",
  },
  {
    id: "P004",
    name: "Nike Air Force 1 React",
    description: "Men's Shoes",
    price: "₹13995.00",
    imageUrl: "/product/p (4).jpg",
    category: "men",
    deal: "Just In",
  },
  {
    id: "P005",
    name: "Air Jaordan 1 Elecate Low",
    description: "Women's Shoes",
    price: "₹11895.00",
    imageUrl: "/product/p (5).jpg",
    category: "women",
    deal: "Promo Exculsion",
  },
  {
    id: "P006",
    name: "Nike Standard Issue",
    description: "Women's Basketball Issue",
    price: "₹2895.00",
    imageUrl: "/product/p (6).jpg",
    category: "women",
    deal: "Just In",
  },
  {
    id: "P007",
    name: "Nike Dunk Low Retro SE",
    description: "Men's Shoes",
    price: "₹9695",
    imageUrl: "/product/p (7).jpg",
    category: "men",
    deal: "Promo Exculsion",
  },

  {
    id: "P008",
    name: "Nike Dri-FIT UV Hyverse",
    description: "Men's Short-Sleeve Graphic Fitness Top",
    price: "₹2495.00",
    imageUrl: "/product/p (8).jpg",
    category: "men",
    deal: "Sustainable Materials",
  },

  {
    id: "P009",
    name: "Nike Court Vision Low",
    description: "Men's Shoes",
    price: "₹5695.00",
    imageUrl: "/product/p (9).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P010",
    name: "Nike Dri-FIT Ready",
    description: "Men's Short-Sleeve Fitness Top",
    price: "₹2495.00",
    imageUrl: "/product/p (10).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P011",
    name: "Nike One Leak Protection: Period",
    description: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    price: "₹3395.00",
    imageUrl: "/product/p (11).jpg",
    category: "women",
    deal: "Just In",
  },

  {
    id: "P012",
    name: "Nike Air Force 1 LV8 3",
    description: "Older Kids Shoe",
    price: "₹2495.00",
    imageUrl: "/product/p (12).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P013",
    name: "Nike Blazer Low Plattorm",
    description: "Women's Shoes",
    price: "₹8195.00",
    imageUrl: "/product/p (13).jpg",
    category: "women",
    deal: "Just In",
  },

  {
    id: "P014",
    name: "Nike Air Force 1 '07",
    description: "Women's Shoe",
    price: "₹8195.00",
    imageUrl: "/product/p (14).jpg",
    category: "women",
    deal: "Just In",
  },

  {
    id: "P015",
    name: "Nike Pro Dri-Fit",
    description: "Men's Tight-Fit Sleeveless Top",
    price: "₹1495.00",
    imageUrl: "/product/p (15).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P016",
    name: "Nike Dunk Low Retro",
    description: "Men's Shoes",
    price: "₹8695.00",
    imageUrl: "/product/p (16).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P017",
    name: "Nike Air Max Sc",
    description: "Women's Shoes",
    price: "₹5995.00",
    imageUrl: "/product/p (17).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P018",
    name: "Nike Dri-FIT UV Miller",
    description: "Men's Short_sleeve runnign top",
    price: "₹1695.00",
    imageUrl: "/product/p (18).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P019",
    name: "Nike Air Max SYSTM",
    description: "Older Kids' Shoes",
    price: "₹6495.00",
    imageUrl: "/product/p (19).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0120",
    name: "Nike Alate All U",
    description: "Women's Light-Supported Lightly Lined U-",
    price: "₹2195.00",
    imageUrl: "/product/p (20).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0121",
    name: "Nike Court Legacy Lift",
    description: "Women' shoes",
    price: "₹7495.00",
    imageUrl: "/product/p (21).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0122",
    name: "Nike swoosh",
    description: "Women's Medium-support Padded Sports",
    price: "₹3095.00",
    imageUrl: "/product/p (22).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0123",
    name: "Nike SB Zoom Janoski OG+",
    description: "Shoes",
    price: "₹2195.00",
    imageUrl: "/product/p (23).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0124",
    name: "Nike Dri-FIT Run Division Rise 365",
    description: "Men's running tank",
    price: "₹3495.00",
    imageUrl: "/product/p (24).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0125",
    name: "Nike Dri-FIT Challenger",
    description: "Men's 18cm(approx) 2-in-1 Shorts",
    price: "₹2495.00",
    imageUrl: "/product/p (25).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0126",
    name: "Jordan Series ES",
    description: "Men's shoes",
    price: "₹7495.00",
    imageUrl: "/product/p (26).jpg",
    category: "men",
    deal: "Just In",
  },


  {
    id: "P0127",
    name: "Nike Outdoor Play",
    description: "Older Kids' Oversized Woven Jacket",
    price: "₹3895.00",
    imageUrl: "/product/p (27).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0128",
    name: "Nike Sportswear Trend",
    description: "Older Kids' (Girls') High-Waisted Woven Shorts ",
    price: "₹2495.00",
    imageUrl: "/product/p (28).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0129",
    name: "Nike Blazer Low '77 Jumbo",
    description: "Women's shoes",
    price: "₹8595.00",
    imageUrl: "/product/p (29).jpg",
    category: "men",
    deal: "Just In",
  },

  {
    id: "P0130",
    name: "Nike SB Force 58",
    description: "Skate shoes",
    price: "₹5995.00",
    imageUrl: "/product/p (30).jpg",
    category: "men",
    deal: "Just In",
  },




];

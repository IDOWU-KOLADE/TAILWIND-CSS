import Image from "next/image"

const properties = [
  {
    id: 1,
    featured: true,
    image: "/propertiesimg/property1.jpg",
    title: "Luxury 4 Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 260,
  },
  {
    id: 2,
    featured: false,
    image: "/propertiesimg/property2.jpg",
    title: "Modern 3 Bedroom Apartment",
    location: "Victoria Island, Lagos",
    price: "$320,000",
    beds: 3,
    baths: 2,
    sqft: 180,
  },
]

export function RecentProperties() {
  return (
    <div className="mx-4 mt-6">

      {/* header */}
      <div className="flex items-center justify-between mb-4 ">
        <span className="text-gray-900 font-medium">Recent Properties</span>
        <button className="text-indigo-400 text-sm">View All</button>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((p) => (
          <div key={p.id} className="bg-[white] rounded-xl overflow-hidden">

            {/* image */}
            <div className="relative w-full h-44">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
              {p.featured && (
                <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
              <button className="absolute top-3 right-3 bg-black/40 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg">
                ···
              </button>
            </div>

            {/* info */}
            <div className="p-4">
              <h3 className="text-gray-900 font-medium text-sm">{p.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{p.location}</p>
              <p className="text-gray-900 font-semibold mt-2">{p.price}</p>

              {/* details */}
              <div className="flex items-center gap-4 mt-3 text-gray-400 text-xs">
                <span>🛏 {p.beds}</span>
                <span>🚿 {p.baths}</span>
                <span>📐 {p.sqft} sqm</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
export default function NewsSection() {
    const newsItems = [
      {
        id: 1,
        category: "Design",
        title: "Lorem Ipsum Color Sit de Amit",
        description:
          "Amet, consectetur adipiscing elit. Donec ut Fusce vel diam commodo, molestie sapien eu, egestas aenean risus facilisi.",
        image: "https://via.placeholder.com/500x500",
      },
      {
        id: 2,
        category: "Technology",
        title: "Innovative Solutions for Modern Challenges",
        description:
          "Praesent faucibus sapien eu diam facilisis, nec convallis erat interdum. Sed ut neque vitae erat elementum viverra.",
        image: "https://via.placeholder.com/500x500", 
      },
      {
        id: 3,
        category: "Business",
        title: "Expanding Horizons in Global Markets",
        description:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sed felis ac lectus pretium fermentum.",
        image: "https://via.placeholder.com/500x500", 
      },
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold">News & Updates</h2>
            <hr className="border-t mt-4" />
          </div>
  
          {/* News Items */}
          <div className="space-y-12">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0"
              >
                <div className="w-full lg:w-1/2 space-y-4">
                  <p className="text-sm text-gray-500 uppercase">{item.category}</p>
                  <h3 className="font-serif font-semibold text-5xl">{item.title}</h3>
                  <p className="text-xl text-gray-600">{item.description}</p>
                  <button className="px-6 py-2 border border-gray-900 rounded-full text-gray-900 hover:bg-gray-100">
                    Read More
                  </button>
                </div>
  
                <div className="w-full lg:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
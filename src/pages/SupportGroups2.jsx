import React from "react";

const group2 = [
  {
    type: "article",
    title: "Peak Mind - Contact",
    link: "https://www.peakmind.in/contact",
    url: "https://uploads-ssl.webflow.com/6239d45df8c8f750082d66ea/62fba161f8884c2e80b96b7b_PEAKMINDLOGONEWres2-p-500.png",
  },
  {
    type: "article",
    title: "Mpower Minds - Contact",
    link: "https://mpowerminds.com/contact",
    url: "https://mpowerminds.com/assets/img/root/Mpower%20Logo-04.svg",
  },
  {
    type: "article",
    title: "Kashmir Lifeline - Contact",
    link: "http://kashmirlifeline.org/contact.php",
    url: "http://kashmirlifeline.org/static/img/logos/logo-kll.png",
  },
  {
    type: "article",
    title: "Parivarthan - Contact",
    link: "https://parivarthan.org/contact/",
    url: "https://parivarthan.org/wp-content/uploads/2020/03/parivarthan-gray-logo.png",
  },
  {
    type: "article",
    title: "Arpan - WhatsApp Groups",
    link: "https://www.arpan.org.in/whatsapp-groups/",
    url: "http://www.arpan.org.in/wp-content/uploads/2019/04/Arpan-English-Logo-cc-e1584098567989.jpg",
  },
];

const SupportGroups2 = () => {
  return (
    <section
      className="support-groups-2"
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          color: "#2c3e50",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        More Support Groups
      </h2>

      <div
        className="groups-slider"
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "20px",
          paddingBottom: "10px",
          scrollbarWidth: "thin",
          scrollbarColor: "#4a90e2 transparent",
        }}
      >
        {group2.map((group) => (
          <a
            key={group.link}
            href={group.link}
            target="_blank"
            rel="noopener noreferrer"
            className="groups-card"
            style={{
              flex: "0 0 280px",
              scrollSnapAlign: "start",
              backgroundColor: "#f9f9f9",
              borderRadius: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              textDecoration: "none",
              color: "#2c3e50",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={group.url}
              alt={group.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                backgroundColor: "white",
                padding: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              {group.title}
            </h3>
          </a>
        ))}
      </div>

      {/* Scrollbar styling for Webkit browsers */}
      <style>{`
        .groups-slider::-webkit-scrollbar {
          height: 8px;
        }
        .groups-slider::-webkit-scrollbar-track {
          background: transparent;
        }
        .groups-slider::-webkit-scrollbar-thumb {
          background-color: #4a90e2;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default SupportGroups2;

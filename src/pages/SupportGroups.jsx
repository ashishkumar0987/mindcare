import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const supportGroupsData = [
  {
    id: 1,
    type: "article",
    title: "Care Givers Mental Health Support Group - Bandra West, Mumbai",
    link: "https://themindclan.com/reach-out/?P=a08254630019062b4b9f3103cf18fd49&utm_source=platform",
    image: "https://themindclan.com/images/smaller/sharing_spaces/care-givers-mental-health-support-group-offline-bandra-west-mumbai.webp",
    category: "caregivers",
    location: "Mumbai",
    format: "offline",
    description: "A dedicated support group for caregivers providing mental health support and resources. This group offers a safe space for caregivers to share experiences and find support.",
    rating: 4.8,
    members: 156,
    meetingTime: "Every Saturday, 4:00 PM",
    facilitator: "Dr. Anjali Sharma",
    contact: "caregivers@themindclan.com",
    duration: "90 minutes",
    cost: "Free"
  },
  {
    id: 2,
    type: "article",
    title: "Queerstion Support Group - Mumbai",
    link: "https://themindclan.com/sharing_spaces/queerstion-26062023/",
    image: "https://themindclan.com/images/smaller/sharing_spaces/queerstion-support-group-mumbai-image.webp",
    category: "lgbtq+",
    location: "Mumbai",
    format: "offline",
    description: "A safe space for LGBTQ+ individuals to connect, share experiences, and find support. This group focuses on creating an inclusive environment for all members of the LGBTQ+ community.",
    rating: 4.9,
    members: 89,
    meetingTime: "First Sunday of the month, 3:00 PM",
    facilitator: "Rohit Verma",
    contact: "queerstion@themindclan.com",
    duration: "2 hours",
    cost: "Free"
  },
  {
    id: 3,
    type: "article",
    title: "BPD Space - Peer Led Support Group for BPD India (Online)",
    link: "https://themindclan.com/sharing_spaces/bpd-space-bpd-support-group-18072023/",
    image: "https://themindclan.com/images/smaller/sharing_spaces/bpd-space-support-group-peer-led-for-bpd-india-online.webp",
    category: "bpd",
    location: "Online",
    format: "online",
    description: "Peer-led support group specifically for individuals with Borderline Personality Disorder. This group provides a safe space to share experiences and learn coping strategies.",
    rating: 4.7,
    members: 124,
    meetingTime: "Every Tuesday, 6:00 PM",
    facilitator: "Priya Nair (Peer Facilitator)",
    contact: "bpd@themindclan.com",
    duration: "75 minutes",
    cost: "Free"
  },
  {
    id: 4,
    type: "article",
    title: "Group Therapy by Ayesha Dialogue - Mental Health",
    link: "https://themindclan.com/sharing_spaces/group-therapy-01082023/",
    image: "https://themindclan.com/images/smaller/sharing_spaces/group-therapy-by-ayesha-dialogue-mental-health.webp",
    category: "therapy",
    location: "Multiple",
    format: "both",
    description: "Professional group therapy sessions facilitated by mental health experts. These sessions focus on various mental health topics and provide evidence-based therapeutic interventions.",
    rating: 4.6,
    members: 203,
    meetingTime: "Varies by group",
    facilitator: "Dr. Ayesha Singh",
    contact: "therapy@themindclan.com",
    duration: "90 minutes",
    cost: "Rs. 500-1000 per session"
  },
  {
    id: 5,
    type: "article",
    title: "Through Thick and Thin Support Group",
    link: "https://themindclan.com/sharing_spaces/through-thick-and-thin-04072022/",
    image: "https://themindclan.com/images/smaller/sharing_spaces/ttnt.webp",
    category: "general",
    location: "Multiple",
    format: "both",
    description: "A general mental health support group for individuals facing various challenges. This group provides a supportive environment to share experiences and learn from others.",
    rating: 4.5,
    members: 178,
    meetingTime: "Every Wednesday, 7:00 PM",
    facilitator: "Varies by session",
    contact: "ttnt@themindclan.com",
    duration: "60 minutes",
    cost: "Free"
  },
  {
    id: 6,
    type: "article",
    title: "Peak Mind Support Services",
    link: "https://www.peakmind.in/contact",
    image: "https://uploads-ssl.webflow.com/6239d45df8c8f750082d66ea/62fba161f8884c2e80b96b7b_PEAKMINDLOGONEWres2-p-500.png",
    category: "organization",
    location: "Multiple",
    format: "both",
    description: "Comprehensive mental health services including counseling, workshops, and support groups. Peak Mind offers a range of services to support mental well-being.",
    rating: 4.7,
    members: 342,
    meetingTime: "Varies by program",
    facilitator: "Multiple professionals",
    contact: "info@peakmind.in",
    duration: "Varies",
    cost: "Varies by program"
  },
  {
    id: 7,
    type: "article",
    title: "Mpower Minds Support Network",
    link: "https://mpowerminds.com/contact",
    image: "https://mpowerminds.com/assets/img/root/Mpower%20Logo-04.svg",
    category: "organization",
    location: "Multiple",
    format: "both",
    description: "Initiative focused on creating awareness about mental health and providing support services. Mpower Minds offers various programs and resources for mental well-being.",
    rating: 4.8,
    members: 521,
    meetingTime: "Varies by program",
    facilitator: "Multiple professionals",
    contact: "contact@mpowerminds.com",
    duration: "Varies",
    cost: "Varies by program"
  },
  {
    id: 8,
    type: "article",
    title: "Kashmir Lifeline Crisis Support",
    link: "http://kashmirlifeline.org/contact.php",
    image: "http://kashmirlifeline.org/static/img/logos/logo-kll.png",
    category: "crisis",
    location: "Kashmir",
    format: "both",
    description: "24/7 mental health crisis support and counseling services for the Kashmir region. This service provides immediate support for individuals experiencing mental health crises.",
    rating: 4.9,
    members: 267,
    meetingTime: "24/7 availability",
    facilitator: "Trained crisis counselors",
    contact: "9906817341",
    duration: "Varies",
    cost: "Free"
  },
  {
    id: 9,
    type: "article",
    title: "Parivarthan Recovery Center",
    link: "https://parivarthan.org/contact/",
    image: "https://parivarthan.org/wp-content/uploads/2020/03/parivarthan-gray-logo.png",
    category: "recovery",
    location: "Bangalore",
    format: "both",
    description: "Recovery and rehabilitation center offering support for addiction and mental health issues. Parivarthan provides a comprehensive approach to recovery and mental well-being.",
    rating: 4.6,
    members: 189,
    meetingTime: "Varies by program",
    facilitator: "Multiple professionals",
    contact: "info@parivarthan.org",
    duration: "Varies",
    cost: "Varies by program"
  },
  {
    id: 10,
    type: "article",
    title: "Arpan Child Safety WhatsApp Groups",
    link: "https://www.arpan.org.in/whatsapp-groups/",
    image: "http://www.arpan.org.in/wp-content/uploads/2019/04/Arpan-English-Logo-cc-e1584098567989.jpg",
    category: "child-safety",
    location: "Multiple",
    format: "online",
    description: "WhatsApp support groups focused on child safety and protection against abuse. These groups provide resources and support for parents, caregivers, and professionals working with children.",
    rating: 4.8,
    members: 434,
    meetingTime: "Ongoing discussions",
    facilitator: "Child safety experts",
    contact: "9819108649",
    duration: "Ongoing",
    cost: "Free"
  }
];

const categories = [
  { id: 'all', name: 'All Categories', icon: '\ud83c\udf10', color: '#3498db' },
  { id: 'caregivers', name: 'Caregivers', icon: '\ud83e\udd1d', color: '#e74c3c' },
  { id: 'lgbtq+', name: 'LGBTQ+', icon: '\ud83c\udff3\ufe0f\u200d\ud83c\udf08', color: '#f39c12' },
  { id: 'bpd', name: 'BPD', icon: '\ud83e\udde0', color: '#1abc9c' },
  { id: 'therapy', name: 'Therapy', icon: '\ud83d\udc69\u200d\u2640\ufe0f', color: '#34495e' },
  { id: 'general', name: 'General', icon: '\ud83d\udcac', color: '#95a5a6' },
  { id: 'organization', name: 'Organizations', icon: '\ud83c\udfe2', color: '#9b59b6' },
  { id: 'crisis', name: 'Crisis Support', icon: '\ud83d\udea8', color: '#e67e22' },
  { id: 'recovery', name: 'Recovery', icon: '\ud83d\udd04', color: '#16a085' },
  { id: 'child-safety', name: 'Child Safety', icon: '\ud83d\udee1', color: '#8e44ad' }
];

const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'Online', name: 'Online' },
  { id: 'Mumbai', name: 'Mumbai' },
  { id: 'Bangalore', name: 'Bangalore' },
  { id: 'Kashmir', name: 'Kashmir' },
  { id: 'Delhi', name: 'Delhi' },
  { id: 'Chennai', name: 'Chennai' },
  { id: 'Kolkata', name: 'Kolkata' },
  { id: 'Multiple', name: 'Multiple Locations' }
];

const formats = [
  { id: 'all', name: 'All Formats', icon: '\ud83d\udd04' },
  { id: 'online', name: 'Online Only', icon: '\ud83d\udcbb' },
  { id: 'offline', name: 'Offline Only', icon: '\ud83c\udfe2' },
  { id: 'both', name: 'Online & Offline', icon: '\ud83d\udcbb\ud83c\udfe2' }
];

const SupportGroups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredGroups, setFilteredGroups] = useState(supportGroupsData);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = supportGroupsData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(group =>
        group.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(group => group.category === selectedCategory);
    }

    // Filter by location
    if (selectedLocation !== "all") {
      filtered = filtered.filter(group => group.location === selectedLocation);
    }

    // Filter by format
    if (selectedFormat !== "all") {
      filtered = filtered.filter(group => group.format === selectedFormat);
    }

    setFilteredGroups(filtered);
  }, [searchTerm, selectedCategory, selectedLocation, selectedFormat]);

  // Get category color
  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : '#3498db';
  };

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : '\ud83c\udf10';
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLocation("all");
    setSelectedFormat("all");
  };

  // Handle group card click
  const handleGroupClick = (groupId) => {
    navigate(`/support-group/${groupId}`);
  };

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < rating ? '#f39c12' : '#ddd' }}>
            {'\u2605'}
          </span>
        ))}
        <span style={{ marginLeft: '5px', fontSize: '0.9rem', color: '#666' }}>
          ({rating})
        </span>
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '0',
      margin: '0'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3498db, #2c3e50)',
        color: 'white',
        padding: '5rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80") center/cover',
          opacity: 0.2,
          zIndex: 0
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Find Your Support Community
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Connect with others who understand what you're going through. Find support groups 
            and organizations that offer a safe space to share experiences and find help.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => navigate('/explore-groups')}
              style={{
                padding: '15px 30px',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(46, 204, 113, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#27ae60';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2ecc71';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Explore Groups
            </button>
            
            <button
              onClick={() => navigate('/start-group')}
              style={{
                padding: '15px 30px',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Start a Group
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{
        backgroundColor: '#f1f8ff',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontWeight: '700',
            color: '#2c3e50'
          }}>
            Browse by Category
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2rem 1rem',
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  fontSize: '3rem'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#2c3e50',
                  margin: '0'
                }}>
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto',
            width: '100%'
          }}>
            <input
              type="text"
              placeholder="Search for support groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 50px 15px 20px',
                borderRadius: '50px',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#888'
            }}>
              {'\ud83d\udd0d'}
            </span>
          </div>

          {/* Filter Toggle Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <span>{showFilters ? '\u25b2' : '\u25bc'}</span>
            </button>

            {(searchTerm || selectedCategory !== 'all' || selectedLocation !== 'all' || selectedFormat !== 'all') && (
              <button
                onClick={clearFilters}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '10px 20px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Clear Filters
                <span>{'\u2715'}</span>
              </button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* Category Filter */}
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: '#2c3e50',
                    fontWeight: '600'
                  }}>
                    Category
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '20px',
                          border: 'none',
                          backgroundColor: selectedCategory === category.id 
                            ? category.color 
                            : '#f1f1f1',
                          color: selectedCategory === category.id 
                            ? 'white' 
                            : '#333',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: '#2c3e50',
                    fontWeight: '600'
                  }}>
                    Location
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {locations.map(location => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '20px',
                          border: 'none',
                          backgroundColor: selectedLocation === location.id 
                            ? '#3498db' 
                            : '#f1f1f1',
                          color: selectedLocation === location.id 
                            ? 'white' 
                            : '#333',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {location.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format Filter */}
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: '#2c3e50',
                    fontWeight: '600'
                  }}>
                    Format
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {formats.map(format => (
                      <button
                        key={format.id}
                        onClick={() => setSelectedFormat(format.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '20px',
                          border: 'none',
                          backgroundColor: selectedFormat === format.id 
                            ? '#3498db' 
                            : '#f1f1f1',
                          color: selectedFormat === format.id 
                            ? 'white' 
                            : '#333',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {format.icon} {format.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#666'
        }}>
          {filteredGroups.length} support group{filteredGroups.length !== 1 ? 's' : ''} found
        </div>
      </section>

      {/* Support Groups Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 3rem',
        padding: '0 2rem'
      }}>
        {filteredGroups.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                onClick={() => handleGroupClick(group.id)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Image */}
                <div style={{
                  height: '180px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={group.image}
                    alt={group.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: getCategoryColor(group.category),
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <span>{getCategoryIcon(group.category)}</span>
                    {categories.find(cat => cat.id === group.category)?.name || group.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4',
                    color: '#2c3e50'
                  }}>
                    {group.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.5',
                    color: '#666',
                    marginBottom: '1rem',
                    height: '60px',
                    overflow: 'hidden'
                  }}>
                    {group.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem'
                    }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.9rem',
                        color: '#666'
                      }}>
                        {'\ud83d\udccd'} {group.location}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.9rem',
                        color: '#666'
                      }}>
                        {group.format === 'online' ? '\ud83d\udcbb' : group.format === 'offline' ? '\ud83c\udfe2' : '\ud83d\udcbb\ud83c\udfe2'}
                      </span>
                    </div>
                    
                    {renderStars(group.rating)}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      <span>{'\ud83d\udc65'} {group.members} members</span>
                      <span>{'\u23f0'} {group.meetingTime}</span>
                    </div>
                  </div>
                  
                  <button
                    style={{
                      display: 'inline-block',
                      width: '100%',
                      padding: '12px',
                      backgroundColor: getCategoryColor(group.category),
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      textAlign: 'center',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              {'\ud83d\udd0d'}
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#2c3e50'
            }}>
              No support groups found
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              maxWidth: '500px',
              margin: '0 auto 1.5rem'
            }}>
              Try adjusting your search or filters to find the support groups you're looking for.
            </p>
            <button
              onClick={clearFilters}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Stay Connected
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Subscribe to our newsletter to receive updates on new support groups and mental health resources.
          </p>
          
          <form style={{
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: '15px 20px',
                borderRadius: '50px 0 0 50px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '15px 30px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '0 50px 50px 0',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SupportGroups;
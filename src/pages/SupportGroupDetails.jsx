import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

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
    cost: "Free",
    detailedDescription: "Being a caregiver can be emotionally and physically demanding. This support group is designed specifically for caregivers who are supporting loved ones with mental health challenges. We provide a safe, confidential space where you can share your experiences, learn coping strategies, and connect with others who understand your journey. Our meetings are facilitated by mental health professionals who provide guidance and resources to help you maintain your own well-being while caring for others."
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
    cost: "Free",
    detailedDescription: "Queerstion is a peer-led support group for LGBTQ+ individuals to share their experiences, challenges, and triumphs in a safe and affirming environment. Our group is open to all members of the LGBTQ+ community, regardless of where you are in your journey. We discuss topics related to identity, relationships, mental health, and navigating societal challenges. Our facilitator creates a welcoming space where everyone's voice is heard and respected."
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
    cost: "Free",
    detailedDescription: "BPD Space is a peer-led support group for individuals diagnosed with Borderline Personality Disorder or those who suspect they may have BPD. Our group provides a non-judgmental space to share experiences, discuss challenges, and learn effective coping strategies. As a peer-led group, our facilitator has personal experience with BPD and creates an environment of mutual understanding and support. We focus on DBT skills, emotional regulation, and building meaningful connections."
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
    cost: "Rs. 500-1000 per session",
    detailedDescription: "Our group therapy sessions are led by licensed mental health professionals and focus on specific topics such as anxiety, depression, trauma, and relationship issues. These evidence-based therapy groups provide a supportive environment to work through challenges with others who share similar experiences. Each session incorporates therapeutic techniques, group discussions, and practical skills to help you manage symptoms and improve your mental well-being."
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
    cost: "Free",
    detailedDescription: "Through Thick and Thin is a general mental health support group open to anyone seeking support for various mental health challenges. Our group provides a non-judgmental space to share experiences, learn coping strategies, and connect with others who understand what you're going through. Sessions are facilitated by trained volunteers or mental health professionals who create a supportive environment for open discussion and mutual support."
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
    cost: "Varies by program",
    detailedDescription: "Peak Mind is a comprehensive mental health organization offering a wide range of services including individual counseling, group therapy, workshops, and specialized support groups. Our team of mental health professionals provides evidence-based treatments for various mental health conditions. We offer both online and offline services to ensure accessibility for all. Our programs are designed to promote mental well-being, build resilience, and create a supportive community for individuals on their mental health journey."
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
    cost: "Varies by program",
    detailedDescription: "Mpower Minds is a leading mental health initiative dedicated to creating awareness, reducing stigma, and providing comprehensive support services. Our organization offers a wide range of programs including support groups, counseling services, educational workshops, and crisis intervention. We work with schools, colleges, and corporate organizations to promote mental health literacy and create supportive environments. Our team of experts is committed to making mental health services accessible and affordable for all."
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
    cost: "Free",
    detailedDescription: "Kashmir Lifeline provides 24/7 crisis support and counseling services for individuals experiencing mental health emergencies in the Kashmir region. Our trained crisis counselors offer immediate support, de-escalation techniques, and referrals to appropriate services. We understand the unique challenges faced by individuals in conflict-affected areas and provide culturally sensitive support. Our services are completely confidential and free of charge, ensuring that help is accessible to everyone in need."
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
    cost: "Varies by program",
    detailedDescription: "Parivarthan is a leading recovery and rehabilitation center offering comprehensive support for individuals dealing with addiction and co-occurring mental health issues. Our evidence-based programs include detoxification, counseling, group therapy, family therapy, and aftercare support. We take a holistic approach to recovery, addressing physical, mental, emotional, and spiritual aspects of well-being. Our team of experienced professionals provides personalized care to support each individual's unique recovery journey."
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
    cost: "Free",
    detailedDescription: "Arpan's WhatsApp support groups provide a platform for parents, caregivers, and professionals to access resources and support related to child safety and protection against abuse. Our groups are moderated by child safety experts who share evidence-based information, answer questions, and facilitate discussions on topics such as recognizing signs of abuse, teaching personal safety to children, and creating safe environments. These groups offer a convenient way to stay connected and informed about child safety best practices."
  }
];

const categories = [
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

const SupportGroupDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Find the group with the matching ID
    const foundGroup = supportGroupsData.find(g => g.id === parseInt(id));
    
    if (foundGroup) {
      setGroup(foundGroup);
    } else {
      // Group not found, redirect to support groups page
      navigate('/support-groups');
    }
    
    setLoading(false);
  }, [id, navigate]);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your interest! We will contact you soon.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        color: '#3498db'
      }}>
        Loading...
      </div>
    );
  }

  if (!group) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
          Support Group Not Found
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
          The support group you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/support-groups')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Back to Support Groups
        </button>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '0',
      margin: '0'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#3498db',
        color: 'white',
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => navigate('/support-groups')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginRight: '1rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          ←
        </button>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
          Support Group Details
        </h1>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Left Column - Image and Basic Info */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              marginBottom: '1.5rem'
            }}>
              <img
                src={group.image}
                alt={group.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '5px 12px',
                    backgroundColor: getCategoryColor(group.category),
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {getCategoryIcon(group.category)} {categories.find(cat => cat.id === group.category)?.name}
                  </span>
                  
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    {group.format === 'online' ? '\ud83d\udcbb' : group.format === 'offline' ? '\ud83c\udfe2' : '\ud83d\udcbb\ud83c\udfe2'}
                    {group.format === 'online' ? 'Online' : group.format === 'offline' ? 'Offline' : 'Online & Offline'}
                  </span>
                </div>
                
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#2c3e50',
                  lineHeight: '1.3'
                }}>
                  {group.title}
                </h2>
                
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666',
                  marginBottom: '1.5rem'
                }}>
                  {group.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#666',
                      marginBottom: '0.5rem'
                    }}>
                      {'\ud83d\udccd'} {group.location}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      {'\u23f0'} {group.meetingTime}
                    </div>
                  </div>
                  
                  {renderStars(group.rating)}
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    <span>{'\ud83d\udc65'} {group.members} members</span>
                    <span>{'\u23f1\ufe0f'} {group.duration}</span>
                  </div>
                  
                  <span style={{
                    padding: '5px 12px',
                    backgroundColor: group.cost === 'Free' ? '#2ecc71' : '#f39c12',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {group.cost}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <button
                onClick={() => setShowContactForm(true)}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Join This Group
              </button>
              
              <a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                Visit Website
              </a>
            </div>
          </div>
          
          {/* Right Column - Detailed Information */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                About This Group
              </h3>
              
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666',
                marginBottom: '1.5rem'
              }}>
                {group.detailedDescription}
              </p>
              
              <div style={{
                borderTop: '1px solid #eee',
                paddingTop: '1rem'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.8rem',
                  color: '#2c3e50'
                }}>
                  Group Details
                </h4>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#7f8c8d',
                      marginBottom: '0.3rem'
                    }}>
                      Facilitator
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>
                      {group.facilitator}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#7f8c8d',
                      marginBottom: '0.3rem'
                    }}>
                      Contact
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>
                      {group.contact}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#7f8c8d',
                      marginBottom: '0.3rem'
                    }}>
                      Duration
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>
                      {group.duration}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#7f8c8d',
                      marginBottom: '0.3rem'
                    }}>
                      Cost
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#2c3e50'
                    }}>
                      {group.cost}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What to Expect */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                What to Expect
              </h3>
              
              <ul style={{
                paddingLeft: '1.5rem',
                margin: 0,
                color: '#666',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  A safe and confidential space to share experiences
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Support from peers who understand your journey
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Guidance from experienced facilitators
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Practical coping strategies and resources
                </li>
                <li>
                  A non-judgmental environment focused on growth and healing
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Similar Groups */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#2c3e50'
          }}>
            Similar Support Groups
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {supportGroupsData
              .filter(g => g.category === group.category && g.id !== group.id)
              .slice(0, 3)
              .map(similarGroup => (
                <div
                  key={similarGroup.id}
                  onClick={() => navigate(`/support-group/${similarGroup.id}`)}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    border: '1px solid #eee',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src={similarGroup.image}
                    alt={similarGroup.title}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      margin: '0 0 0.5rem 0',
                      color: '#2c3e50',
                      lineHeight: '1.3'
                    }}>
                      {similarGroup.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      color: '#666',
                      marginBottom: '0.3rem'
                    }}>
                      {'\ud83d\udccd'} {similarGroup.location}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      color: '#666'
                    }}>
                      {'\u23f0'} {similarGroup.meetingTime}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      
      {/* Contact Form Modal */}
      {showContactForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '2rem',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0,
                color: '#2c3e50'
              }}>
                Join This Support Group
              </h3>
              
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    backgroundColor: '#f1f1f1',
                    color: '#333',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '12px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportGroupDetails;
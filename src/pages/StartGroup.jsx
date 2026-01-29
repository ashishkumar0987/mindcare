import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartGroup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    groupName: '',
    category: '',
    format: '',
    location: '',
    meetingFrequency: '',
    meetingTime: '',
    facilitatorName: '',
    facilitatorEmail: '',
    facilitatorPhone: '',
    facilitatorExperience: '',
    groupDescription: '',
    groupGoals: '',
    targetAudience: '',
    maxMembers: '',
    meetingDuration: '',
    cost: '',
    contactEmail: '',
    contactPhone: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'caregivers', name: 'Caregivers', icon: '\ud83e\udd1d' },
    { id: 'lgbtq+', name: 'LGBTQ+', icon: '\ud83c\udff3\ufe0f\u200d\ud83c\udf08' },
    { id: 'bpd', name: 'BPD', icon: '\ud83e\udde0' },
    { id: 'therapy', name: 'Therapy', icon: '\ud83d\udc69\u200d\u2640\ufe0f' },
    { id: 'general', name: 'General', icon: '\ud83d\udcac' },
    { id: 'organization', name: 'Organization', icon: '\ud83c\udfe2' },
    { id: 'crisis', name: 'Crisis Support', icon: '\ud83d\udea8' },
    { id: 'recovery', name: 'Recovery', icon: '\ud83d\udd04' },
    { id: 'child-safety', name: 'Child Safety', icon: '\ud83d\udee1' },
    { id: 'other', name: 'Other', icon: '\ud83d\udcdd' }
  ];

  const formats = [
    { id: 'online', name: 'Online Only', icon: '\ud83d\udcbb' },
    { id: 'offline', name: 'Offline Only', icon: '\ud83c\udfe2' },
    { id: 'both', name: 'Online & Offline', icon: '\ud83d\udcbb\ud83c\udfe2' }
  ];

  const locations = [
    { id: 'online', name: 'Online' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'kolkata', name: 'Kolkata' },
    { id: 'hyderabad', name: 'Hyderabad' },
    { id: 'pune', name: 'Pune' },
    { id: 'jaipur', name: 'Jaipur' },
    { id: 'other', name: 'Other' }
  ];

  const frequencies = [
    { id: 'weekly', name: 'Weekly' },
    { id: 'biweekly', name: 'Bi-weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'quarterly', name: 'Quarterly' },
    { id: 'as-needed', name: 'As needed' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  if (submitted) {
    return (
      <div style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '3rem',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}>
            ✅
          </div>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#2c3e50'
          }}>
            Thank You for Your Submission!
          </h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '2rem'
          }}>
            Your support group application has been received. Our team will review your submission and get back to you within 3-5 business days.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormStep(1);
                setFormData({
                  groupName: '',
                  category: '',
                  format: '',
                  location: '',
                  meetingFrequency: '',
                  meetingTime: '',
                  facilitatorName: '',
                  facilitatorEmail: '',
                  facilitatorPhone: '',
                  facilitatorExperience: '',
                  groupDescription: '',
                  groupGoals: '',
                  targetAudience: '',
                  maxMembers: '',
                  meetingDuration: '',
                  cost: '',
                  contactEmail: '',
                  contactPhone: '',
                  additionalInfo: '',
                  agreeToTerms: false
                });
              }}
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
              Submit Another Group
            </button>
            
            <button
              onClick={() => navigate('/support-groups')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Browse Support Groups
            </button>
          </div>
        </div>
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
          Start a Support Group
        </h1>
      </header>

      {/* Progress Bar */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <span style={{ fontWeight: '600', color: '#2c3e50' }}>Step {formStep} of 3</span>
            <span style={{ color: '#666' }}>
              {formStep === 1 && 'Basic Information'}
              {formStep === 2 && 'Group Details'}
              {formStep === 3 && 'Facilitator Information'}
            </span>
          </div>
          
          <div style={{
            height: '8px',
            backgroundColor: '#e9ecef',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${(formStep / 3) * 100}%`,
              backgroundColor: '#3498db',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <main style={{
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '0 2rem'
      }}>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {formStep === 1 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: '#2c3e50'
              }}>
                Basic Information
              </h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Group Name *
                </label>
                <input
                  type="text"
                  name="groupName"
                  value={formData.groupName}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Format *
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem'
                }}>
                  {formats.map(format => (
                    <label key={format.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px',
                      border: `1px solid ${formData.format === format.id ? '#3498db' : '#ddd'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: formData.format === format.id ? '#f0f8ff' : 'white'
                    }}>
                      <input
                        type="radio"
                        name="format"
                        value={format.id}
                        checked={formData.format === format.id}
                        onChange={handleInputChange}
                        required
                        style={{ marginRight: '0.5rem' }}
                      />
                      <span>{format.icon} {format.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Location *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a location</option>
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Meeting Frequency *
                </label>
                <select
                  name="meetingFrequency"
                  value={formData.meetingFrequency}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select frequency</option>
                  {frequencies.map(frequency => (
                    <option key={frequency.id} value={frequency.id}>
                      {frequency.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Preferred Meeting Time *
                </label>
                <input
                  type="text"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  placeholder="e.g., Every Saturday, 4:00 PM"
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
            </div>
          )}
          
          {/* Step 2: Group Details */}
          {formStep === 2 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: '#2c3e50'
              }}>
                Group Details
              </h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Group Description *
                </label>
                <textarea
                  name="groupDescription"
                  value={formData.groupDescription}
                  onChange={handleInputChange}
                  rows="4"
                  required
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Group Goals *
                </label>
                <textarea
                  name="groupGoals"
                  value={formData.groupGoals}
                  onChange={handleInputChange}
                  rows="3"
                  required
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Target Audience *
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  rows="3"
                  required
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Maximum Number of Members *
                </label>
                <input
                  type="number"
                  name="maxMembers"
                  value={formData.maxMembers}
                  onChange={handleInputChange}
                  min="2"
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Meeting Duration *
                </label>
                <input
                  type="text"
                  name="meetingDuration"
                  value={formData.meetingDuration}
                  onChange={handleInputChange}
                  placeholder="e.g., 60 minutes, 90 minutes"
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Cost *
                </label>
                <input
                  type="text"
                  name="cost"
                  value={formData.cost}
                  onChange={handleInputChange}
                  placeholder="e.g., Free, Rs. 500 per session"
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
            </div>
          )}
          
          {/* Step 3: Facilitator Information */}
          {formStep === 3 && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: '#2c3e50'
              }}>
                Facilitator Information
              </h2>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Facilitator Name *
                </label>
                <input
                  type="text"
                  name="facilitatorName"
                  value={formData.facilitatorName}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Facilitator Email *
                </label>
                <input
                  type="email"
                  name="facilitatorEmail"
                  value={formData.facilitatorEmail}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Facilitator Phone *
                </label>
                <input
                  type="tel"
                  name="facilitatorPhone"
                  value={formData.facilitatorPhone}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Facilitator Experience *
                </label>
                <textarea
                  name="facilitatorExperience"
                  value={formData.facilitatorExperience}
                  onChange={handleInputChange}
                  rows="3"
                  required
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#2c3e50'
                }}>
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows="3"
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
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span style={{ fontSize: '0.9rem', color: '#2c3e50' }}>
                    I agree to the <a href="#" style={{ color: '#3498db' }}>Terms and Conditions</a> and <a href="#" style={{ color: '#3498db' }}>Privacy Policy</a>
                  </span>
                </label>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem'
          }}>
            <button
              type="button"
              onClick={prevStep}
              disabled={formStep === 1}
              style={{
                padding: '12px 24px',
                backgroundColor: formStep === 1 ? '#e9ecef' : '#f8f9fa',
                color: formStep === 1 ? '#adb5bd' : '#3498db',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: formStep === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Previous
            </button>
            
            {formStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
        
        {/* Information Box */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '2rem',
          marginTop: '2rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '1rem',
            color: '#2c3e50'
          }}>
            Why Start a Support Group?
          </h3>
          
          <ul style={{
            paddingLeft: '1.5rem',
            margin: 0,
            color: '#666',
            lineHeight: '1.6'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Create a community around shared experiences
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Develop leadership and facilitation skills
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Make a positive impact in others' lives
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Find support for yourself while helping others
            </li>
            <li>
              Contribute to reducing mental health stigma in your community
            </li>
          </ul>
          
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            borderLeft: '4px solid #3498db'
          }}>
            <p style={{
              margin: 0,
              fontSize: '0.9rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              "Starting a support group can be a rewarding experience that not only helps others but also provides you with a sense of purpose and community."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartGroup;
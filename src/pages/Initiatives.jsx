import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Initiatives = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [visibleInitiatives, setVisibleInitiatives] = useState(6);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [savedInitiatives, setSavedInitiatives] = useState([]);
  const [showResources, setShowResources] = useState(false);
  const [activeResource, setActiveResource] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const initiatives = [
    {
      id: 1,
      text: "[italic]National Mental Health Programme (NMHP)[/italic] Launched by the Government of India to deal with the absolute inadequacy of mental health care infrastructure in the country. It aims to ensure the availability and accessibility of minimum mental health care for all in the near foreseeable future, particularly to the most vulnerable sections of the population.",
      image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529903_640.png",
      link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359",
      category: "government",
      location: "India",
      founded: "1982",
      impact: "National reach with focus on vulnerable populations",
      services: ["Mental healthcare infrastructure", "Training programs", "Community outreach"]
    },
    {
      id: 2,
      text: "[italic]MINDS Foundation[/italic] Aims to destigmatize mental health and provide access to high-quality and cost-effective mental health care. It is achieving this goal by providing education and making mental health care accessible. By undertaking continuous research, the Foundation is also creating effective intervention programs.",
      image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/woman-7529904_640.png",
      link: "https://www.mindsfoundation.org/",
      category: "nonprofit",
      location: "Mumbai, India",
      founded: "2014",
      impact: "Reached over 50,000 individuals across rural India",
      services: ["Mental health education", "Accessible care", "Research programs"]
    },
    {
      id: 3,
      text: "[italic]Sangath[/italic] Focuses on mental health development and child, adolescent, and youth development. With several initiatives to design effective treatment plans, Sangath aims to create solutions to improve mental health across all ages and people. It has also collaborated with various government services and departments to develop a broader impact.",
      image: "https://cdn.pixabay.com/photo/2022/08/17/20/00/psychotherapy-7393379_640.png",
      link: "https://sangath.in/",
      category: "nonprofit",
      location: "Goa, India",
      founded: "1996",
      impact: "Pioneered evidence-based mental health interventions in low-resource settings",
      services: ["Child & adolescent mental health", "Research", "Training"]
    },
    {
      id: 4,
      text: "[italic]The Banyan[/italic] Provides housing, mental health care, and the opportunity to reconnect with the world and their families to homeless people living with mental health conditions. Under its NALAM program, it offers free mental health services. The organization has also initiated three Master's degree programs collaborating with the Tata Institute of Social Sciences.",
      image: "https://cdn.pixabay.com/photo/2022/10/18/11/02/mood-7529905_1280.png",
      link: "https://thebanyan.org/",
      category: "nonprofit",
      location: "Chennai, India",
      founded: "1993",
      impact: "Supported over 10,000 individuals with mental health issues",
      services: ["Housing", "Mental healthcare", "Family reconnection", "Academic programs"]
    },
    {
      id: 5,
      text: "[italic]Time to Change[/italic] Based in the UK and its focus is to end mental health discrimination with people who have successfully championed their way through mental illness and want to help others. Also, they assist workplaces to encourage support of their employees and schools so that students may understand mental health better.",
      image: "https://cdn.pixabay.com/photo/2022/08/19/17/51/brain-7397412_1280.png",
      link: "https://www.time-to-change.org.uk/",
      category: "advocacy",
      location: "United Kingdom",
      founded: "2009",
      impact: "Reached millions with anti-stigma campaigns",
      services: ["Anti-stigma campaigns", "Workplace programs", "School initiatives"]
    },
    {
      id: 6,
      text: "[italic]The Black Dog Institute[/italic] Aims to design programmes to create healthier workplace environments and implement workplace programmes that support mental health and wellbeing. Businesses are assisted with creating an organisation that is non-discriminatory and open to helping those who need mental health support.",
      image: "https://cdn.pixabay.com/photo/2018/04/25/22/49/cranium-3350798_640.png",
      link: "https://www.blackdoginstitute.org.au/education-services/workplaces/",
      category: "workplace",
      location: "Australia",
      founded: "2002",
      impact: "Transformed mental health support in hundreds of workplaces",
      services: ["Workplace mental health programs", "Research", "Education"]
    },
    {
      id: 7,
      text: "[italic]NAMI (National Alliance on Mental Illness)[/italic] The largest grassroots mental health organization in the United States dedicated to building better lives for millions of Americans affected by mental illness. They provide advocacy, education, support, and public awareness.",
      image: "https://cdn.pixabay.com/photo/2017/08/07/02/43/people-2604149_640.png",
      link: "https://www.nami.org/",
      category: "nonprofit",
      location: "United States",
      founded: "1979",
      impact: "Over 600 local affiliates across all 50 states",
      services: ["Support groups", "Education programs", "Advocacy", "Crisis intervention"]
    },
    {
      id: 8,
      text: "[italic]Mental Health America (MHA)[/italic] The nation's leading community-based nonprofit dedicated to addressing the needs of those living with mental illness and promoting the overall mental health of all. MHA's work is driven by its commitment to promote mental health as a critical part of overall wellness.",
      image: "https://cdn.pixabay.com/photo/2016/11/14/04/57/mental-illness-1822455_640.png",
      link: "https://mhanational.org/",
      category: "nonprofit",
      location: "United States",
      founded: "1909",
      impact: "Over 100 years of mental health advocacy",
      services: ["Screening tools", "Advocacy", "Public education", "Peer support"]
    },
    {
      id: 9,
      text: "[italic]Headspace[/italic] A digital mental health platform that provides guided meditation, mindfulness training, and mental health tools. With both free and premium content, it aims to make mental health support accessible to everyone through technology.",
      image: "https://cdn.pixabay.com/photo/2020/09/08/06/43/meditation-5554843_640.png",
      link: "https://www.headspace.com/",
      category: "digital",
      location: "Global",
      founded: "2010",
      impact: "Over 65 million users in 190 countries",
      services: ["Meditation", "Mindfulness exercises", "Sleep aids", "Focus tools"]
    }
  ];

  // Mental Health Library Resources
  const libraryResources = [
    {
      id: 'lib1',
      title: 'Understanding Depression',
      author: 'Dr. Rajesh Sharma',
      type: 'Article',
      description: 'A comprehensive guide to understanding the symptoms, causes, and treatment options for depression.',
      content: 'Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. This article explores the biological, psychological, and social factors that contribute to depression, as well as evidence-based treatments including therapy, medication, and lifestyle changes.',
      readTime: '8 min read',
      difficulty: 'Beginner',
      tags: ['depression', 'mental health', 'treatment'],
      link: '#',
      date: '2023-05-15',
      fullText: `Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that requires understanding and medical care. Left untreated, depression can be devastating for those who have it and their families. Fortunately, with early detection, diagnosis and a treatment plan consisting of medication, psychotherapy and healthy lifestyle choices, many people can and do get better.

      Some will only experience one depressive episode in a lifetime, but for most, depression recurs. Without treatment, episodes may last a few months to several years. In an estimated 20% to 30% of cases, treatment may not be fully effective, leading to an acceptance of some level of long-term depression. About 2% to 5% of people with depression eventually have a manic episode — a sign of bipolar disorder — and need to be treated with mood stabilizers as well as antidepressants.

      Symptoms of depression can vary from mild to severe and can include:
      - Feeling sad or having a depressed mood
      - Loss of interest or pleasure in activities once enjoyed
      - Changes in appetite — weight loss or gain unrelated to dieting
      - Trouble sleeping or sleeping too much
      - Loss of energy or increased fatigue
      - Increase in purposeless physical activity (like hand-wringing or pacing) or slowed movements and speech
      - Feeling worthless or guilty
      - Difficulty thinking, concentrating or making decisions
      - Thoughts of death or suicide

      Depression can affect anyone — even a person who appears to live in relatively ideal circumstances. But several factors can play a role in depression:
      - Biochemistry: Differences in certain chemicals in the brain may contribute to symptoms of depression.
      - Genetics: Depression can run in families. For example, if one identical twin has depression, the other has a 70% chance of having the illness sometime in life.
      - Personality: People with low self-esteem, who are easily overwhelmed by stress, or who are generally pessimistic appear to be more vulnerable to depression.
      - Environmental factors: Continuous exposure to violence, neglect, abuse or poverty may make some people more vulnerable to depression.`
    },
    {
      id: 'lib2',
      title: 'Anxiety Management Techniques',
      author: 'Dr. Priya Nair',
      type: 'Guide',
      description: 'Practical techniques to manage anxiety in daily life, including breathing exercises and mindfulness.',
      content: 'Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. This guide provides practical techniques including deep breathing, progressive muscle relaxation, mindfulness meditation, and cognitive restructuring to help manage anxiety symptoms effectively.',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      tags: ['anxiety', 'mindfulness', 'stress management'],
      link: '#',
      date: '2023-06-20',
      fullText: `Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It is a normal human emotion that can be useful in some situations — it can alert us to dangers and help us prepare and pay attention. However, when anxiety becomes excessive, it can interfere with daily life and relationships.

      Anxiety disorders are the most common mental health concern in the United States. Over 40 million adults in the U.S. (19.1%) have an anxiety disorder. Meanwhile, approximately 7% of children aged 3-17 experience issues with anxiety each year. Most people develop symptoms before age 21.

      Symptoms of anxiety disorders can include:
      - Feeling nervous, restless or tense
      - Having a sense of impending danger, panic or doom
      - Having an increased heart rate
      - Breathing rapidly (hyperventilation), sweating, or trembling
      - Feeling weak or tired
      - Having trouble concentrating or thinking about anything other than the present worry
      - Having trouble sleeping
      - Experiencing gastrointestinal (GI) problems
      - Having difficulty controlling worry
      - Having the urge to avoid things that trigger anxiety

      Several techniques can help manage anxiety:
      
      1. Deep Breathing Exercises
      When you're anxious, your breathing becomes rapid and shallow. Deep breathing exercises can help calm your nervous system. Try the 4-7-8 technique: inhale for 4 seconds, hold your breath for 7 seconds, and exhale slowly for 8 seconds. Repeat this several times until you feel more relaxed.

      2. Progressive Muscle Relaxation
      This technique involves tensing and then relaxing different muscle groups throughout your body. Start with your toes and work your way up to your head. Tense each muscle group for 5 seconds, then relax for 10 seconds. This helps you become more aware of physical tension and learn to release it.

      3. Mindfulness Meditation
      Mindfulness involves paying attention to the present moment without judgment. This can help you break free from the cycle of anxious thoughts. Try focusing on your breath, the sensations in your body, or the sounds around you. When your mind wanders (which it will), gently bring your attention back to your chosen focus.

      4. Cognitive Restructuring
      Anxiety often involves distorted or unhelpful thought patterns. Cognitive restructuring helps you identify, challenge, and replace these thoughts with more realistic and balanced ones. For example, if you often think "I'm going to fail," you might challenge this thought by considering evidence for and against it, and then developing a more balanced alternative like "I'm prepared for this challenge, and I'll do my best."

      5. Regular Exercise
      Physical activity can help reduce anxiety by releasing endorphins, improving sleep, and reducing stress hormones. Aim for at least 30 minutes of moderate exercise most days of the week.

      6. Healthy Lifestyle Habits
      Getting enough sleep, eating a balanced diet, limiting caffeine and alcohol, and avoiding nicotine can all help reduce anxiety symptoms.

      Remember, managing anxiety is a skill that takes practice. Be patient with yourself as you learn and apply these techniques. If your anxiety is severe or interfering with your daily life, consider seeking professional help.`
    },
    {
      id: 'lib3',
      title: 'The Science of Sleep and Mental Health',
      author: 'Dr. Anjali Gupta',
      type: 'Research Paper',
      description: 'Exploring the relationship between sleep quality and mental wellbeing, with practical tips for better sleep.',
      content: 'Recent research has established a bidirectional relationship between sleep and mental health. Poor sleep can contribute to the development of mental health disorders, while mental health issues can disrupt sleep patterns. This paper examines the mechanisms behind this relationship and provides evidence-based strategies for improving sleep quality.',
      readTime: '15 min read',
      difficulty: 'Advanced',
      tags: ['sleep', 'research', 'mental wellbeing'],
      link: '#',
      date: '2023-07-10',
      fullText: `Sleep and mental health are closely connected. Sleep deprivation affects your psychological state and mental health. And those with mental health problems are more likely to have insomnia or other sleep disorders.

      Most people have experienced the effects of a sleepless night — irritability, frustration, and difficulty concentrating. While one night of poor sleep isn't likely to cause long-term problems, chronic sleep problems can have serious effects on mental health.

      Sleep problems are particularly common in patients with anxiety, depression, bipolar disorder, and attention deficit hyperactivity disorder (ADHD). Historically, sleep problems were seen as a symptom of mental health conditions, but research now suggests that the relationship is more complex. Sleep problems may contribute to the development or worsening of mental health conditions, and mental health conditions can contribute to sleep problems.

      The relationship between sleep and mental health is bidirectional:
      - Sleep deprivation affects your psychological state and mental health
      - People with mental health problems are more likely to have insomnia or other sleep disorders

      Sleep problems are especially common in patients with:
      - Anxiety disorders
      - Depression
      - Bipolar disorder
      - Attention deficit hyperactivity disorder (ADHD)

      The relationship between sleep and mental health is complex. While sleep deprivation can affect mental health, mental health conditions can also disrupt sleep. This creates a cycle where poor sleep worsens mental health problems, and mental health problems make it harder to sleep well.

      Improving sleep quality can have significant benefits for mental health:
      - Better mood regulation
      - Improved cognitive function
      - Enhanced emotional resilience
      - Reduced risk of mental health disorders

      Strategies for improving sleep quality include:
      1. Maintaining a consistent sleep schedule
      2. Creating a relaxing bedtime routine
      3. Optimizing your sleep environment (cool, dark, and quiet)
      4. Limiting exposure to screens before bed
      5. Avoiding caffeine, alcohol, and large meals close to bedtime
      6. Getting regular physical activity (but not too close to bedtime)
      7. Managing stress through relaxation techniques
      8. Seeking professional help if sleep problems persist

      For those with mental health conditions, treating sleep problems can be an important part of overall treatment. In some cases, addressing sleep issues can improve mental health symptoms, while in other cases, treating the mental health condition may resolve sleep problems.`
    },
    {
      id: 'lib4',
      title: 'Building Resilience in Challenging Times',
      author: 'Dr. Vikram Mehta',
      type: 'Article',
      description: 'Practical strategies for developing psychological resilience to better cope with life\'s challenges.',
      content: 'Resilience is the ability to adapt and bounce back when things don\'t go as planned. It\'s not about avoiding stress but learning to thrive within it. This article explores the science of resilience and provides evidence-based strategies for building this crucial psychological skill.',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      tags: ['resilience', 'coping', 'stress management'],
      link: '#',
      date: '2023-08-05',
      fullText: `Resilience is the psychological strength to cope with and bounce back from stress, adversity, failure, challenges, or even trauma. It's not something you're born with — it's a skill that can be learned and developed by anyone.

      Resilient people don't dwell on failures but acknowledge the situation, learn from mistakes, and then move forward. Research has shown that resilience is ordinary, not extraordinary. People commonly demonstrate resilience, and one example is the response of many Americans to the September 11, 2001 terrorist attacks and efforts to rebuild afterward.

      The road to resilience is likely to involve considerable emotional distress. While certain factors might make some individuals more resilient than others, resilience isn't necessarily a personality trait that only some people possess. Rather, resilience involves behaviors, thoughts, and actions that can be learned and developed in anyone.

      Factors that contribute to resilience include:
      - The capacity to make realistic plans and take steps to carry them out
      - A positive view of yourself and confidence in your strengths and abilities
      - Skills in communication and problem solving
      - The capacity to manage strong feelings and impulses
      - The ability to bounce back from adversity

      Strategies for building resilience:
      
      1. Cultivate Relationships
      Build a network of supportive relationships. Friends, family, and community members can provide support and acceptance in good times and bad. These relationships are crucial to resilience.

      2. Find Meaning in Adversity
      People who have survived trauma often report that they grew in positive ways. They may have a greater appreciation for life, deeper relationships, or an increased sense of strength. Finding meaning in adversity can help you grow through difficult experiences.

      3. Embrace Change
      Flexibility is an essential part of resilience. By learning how to be more adaptable, you'll be better equipped to respond when faced with a life crisis.

      4. Be Hopeful
      An optimistic outlook enables you to expect that good things will happen in your life. Try visualizing what you want, rather than worrying about what you fear.

      5. Nurture Yourself
      Take time to care for your own needs and feelings. Engage in activities that you enjoy and find relaxing. Exercise regularly, get enough sleep, and eat a healthy diet.

      6. Develop Problem-Solving Skills
      Research suggests that people who are able to come up with solutions to their problems are better able to cope with stress than those who can't.

      7. Take Action
      Act on adverse situations as much as you can. Take decisive actions, rather than detaching completely from problems and stresses and wishing they would just go away.

      8. Cultivate Self-Discovery
      People often learn something about themselves and may find that they have grown in some respect as a result of their struggle with loss. Many people who have experienced tragedies and hardship have reported better relationships, greater sense of personal strength, increased sense of self-worth, and a more developed spirituality.

      Building resilience takes time, effort, and intention. Focus on developing these skills gradually, and be patient with yourself as you navigate life's challenges.`
    },
    {
      id: 'lib5',
      title: 'Mindfulness-Based Stress Reduction: A Comprehensive Guide',
      author: 'Dr. Sneha Patel',
      type: 'Guide',
      description: 'An in-depth look at Mindfulness-Based Stress Reduction (MBSR) techniques and how to incorporate them into daily life.',
      content: 'Mindfulness-Based Stress Reduction (MBSR) is a program developed by Jon Kabat-Zinn that uses mindfulness to help people cope with stress, anxiety, depression, and pain. This guide explains the core principles of MBSR and provides practical exercises for developing a regular mindfulness practice.',
      readTime: '14 min read',
      difficulty: 'Intermediate',
      tags: ['mindfulness', 'MBSR', 'stress reduction', 'meditation'],
      link: '#',
      date: '2023-09-12',
      fullText: `Mindfulness-Based Stress Reduction (MBSR) is an eight-week evidence-based program that offers secular, intensive mindfulness training to assist people with stress, anxiety, depression, and pain. Developed by Jon Kabat-Zinn in 1979 at the University of Massachusetts Medical School, MBSR uses a combination of mindfulness meditation, body awareness, and yoga to help people become more mindful.

      The core principle of MBSR is developing a non-judgmental, moment-to-moment awareness. Rather than trying to change your thoughts or feelings, you learn to observe them without judgment. This can help you break free from habitual patterns of thinking and reacting that contribute to stress and emotional distress.

      Key components of MBSR include:
      
      1. Mindfulness Meditation
      This involves paying attention to your breath, bodily sensations, thoughts, and emotions in a non-judgmental way. You might focus on the sensation of breathing, noticing when your mind wanders, and gently bringing your attention back to your breath.

      2. Body Scan Meditation
      This involves systematically focusing your attention on different parts of your body, from your toes to your head, noticing any sensations without trying to change them.

      3. Mindful Movement
      Gentle yoga or stretching exercises performed with mindfulness, paying attention to bodily sensations as you move.

      4. Mindful Daily Activities
      Bringing mindfulness to everyday activities like eating, walking, or washing dishes, paying full attention to the sensory experience.

      Research has shown that MBSR can be effective for:
      - Reducing stress and anxiety
      - Managing depression
      - Improving sleep quality
      - Lowering blood pressure
      - Reducing chronic pain
      - Improving immune function
      - Enhancing emotional regulation
      - Increasing focus and attention

      To start practicing MBSR techniques:
      
      1. Set Aside Regular Time
      Consistency is key. Try to practice mindfulness at the same time each day, even if it's just for 5-10 minutes to start.

      2. Start with Short Sessions
      Begin with 5-10 minute sessions and gradually increase the duration as you become more comfortable with the practice.

      3. Find a Comfortable Position
      You can sit on a chair with your feet flat on the floor and your back straight, or sit on a cushion on the floor. The important thing is to be comfortable yet alert.

      4. Focus on Your Breath
      Pay attention to the physical sensation of your breath as it enters and leaves your body. Notice the rise and fall of your chest or abdomen.

      5. Acknowledge Distractions
      When your mind wanders (which it will), gently acknowledge the distraction without judgment and return your focus to your breath.

      6. Be Patient with Yourself
      Mindfulness is a skill that takes time to develop. Don't judge yourself for having a "busy" mind or for struggling with the practice.

      7. Consider Guided Meditations
      Many people find it helpful to start with guided meditations, which are widely available online and through apps.

      Remember, the goal of mindfulness isn't to empty your mind or stop thinking, but to pay attention to your experience without judgment. With regular practice, you may notice reduced stress, improved focus, and a greater sense of well-being.`
    }
  ];

  // Podcasts & Videos Resources
  const mediaResources = [
    {
      id: 'med1',
      title: 'Mental Health Matters Podcast',
      host: 'Dr. Sameer Singh',
      type: 'Podcast Series',
      description: 'Weekly podcast featuring experts discussing various mental health topics and sharing practical advice.',
      content: 'Join Dr. Sameer Singh as he interviews mental health professionals, researchers, and individuals with lived experience. Each episode explores a different aspect of mental health, from understanding specific conditions to practical coping strategies. Recent episodes have covered topics like managing workplace stress, supporting loved ones with mental illness, and the intersection of physical and mental health.',
      episodes: 42,
      duration: '45-60 min per episode',
      frequency: 'Weekly',
      tags: ['podcast', 'expert interviews', 'practical advice'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2020/05/14/04/43/podcast-5176267_640.jpg',
      fullContent: `Mental Health Matters is a weekly podcast hosted by Dr. Sameer Singh, a clinical psychologist with over 15 years of experience in the field. Each episode features in-depth conversations with mental health professionals, researchers, and individuals sharing their personal experiences with mental health challenges.

      The podcast aims to:
      - Educate listeners about various mental health conditions
      - Provide practical strategies for managing mental health
      - Reduce stigma around mental health issues
      - Share inspiring stories of recovery and resilience

      Recent episodes include:
      
      1. "Managing Workplace Stress": Dr. Singh interviews organizational psychologist Dr. Anjali Sharma about strategies for maintaining mental wellbeing in high-pressure work environments. They discuss setting boundaries, practicing self-compassion, and creating a supportive workplace culture.

      2. "Supporting a Loved One with Depression": This episode features a conversation with family therapist Maya Patel about how to support family members struggling with depression while maintaining your own mental health.

      3. "The Gut-Brain Connection": Nutritionist Dr. Rajiv Kumar explains the emerging research on how gut health affects mental wellbeing and shares dietary recommendations for better mental health.

      4. "Mindfulness for Anxiety": Meditation teacher Priya Nair guides listeners through practical mindfulness exercises specifically designed to reduce anxiety symptoms.

      5. "Medication and Therapy": Psychiatrist Dr. Amit Desai discusses when medication might be helpful for mental health conditions and how it works in combination with therapy.

      Listeners can expect evidence-based information presented in an accessible, conversational format. Each episode includes practical takeaways that listeners can apply in their own lives.

      The podcast is available on all major podcast platforms, including Spotify, Apple Podcasts, Google Podcasts, and Amazon Music. New episodes are released every Wednesday morning.

      Dr. Singh also offers a companion newsletter with episode summaries, additional resources, and exclusive content not available in the podcast episodes. Listeners can sign up for free at mentalhealthmatters.com/newsletter.`
    },
    {
      id: 'med2',
      title: 'Mindfulness for Beginners',
      creator: 'Yoga Institute',
      type: 'Video Course',
      description: 'A comprehensive video course introducing mindfulness practices for stress reduction and improved wellbeing.',
      content: 'This 8-week video course guides beginners through the fundamentals of mindfulness practice. Each week introduces new techniques and builds upon previous lessons. The course includes guided meditations, mindful movement exercises, and practical applications for daily life. Participants report reduced stress, improved focus, and greater emotional regulation.',
      duration: '8 weeks',
      sessions: 16,
      sessionLength: '20-30 min',
      tags: ['mindfulness', 'meditation', 'video course', 'beginners'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/08/07/02/43/people-2604149_640.jpg',
      fullContent: `Mindfulness for Beginners is an 8-week video course designed to introduce participants to the fundamentals of mindfulness practice. Developed by the Yoga Institute, this course combines ancient wisdom with modern psychological research to provide a comprehensive introduction to mindfulness.

      The course is structured as follows:
      
      Week 1: Introduction to Mindfulness
      - What is mindfulness and why it matters
      - The science behind mindfulness
      - Basic breathing meditation
      - Bringing mindfulness to daily activities

      Week 2: Working with Thoughts
      - Understanding the nature of thoughts
      - Observing thoughts without judgment
      - Cognitive defusion techniques
      - Dealing with difficult thoughts

      Week 3: Mindfulness of Emotions
      - Recognizing and naming emotions
      - Creating space for difficult emotions
      - Self-compassion practices
      - Working with emotional triggers

      Week 4: Body Awareness
      - Body scan meditation
      - Mindful movement
      - Working with physical sensations
      - Integrating body and mind

      Week 5: Interpersonal Mindfulness
      - Mindful communication
      - Deep listening
      - Compassion for others
      - Working with relationship challenges

      Week 6: Mindfulness in Daily Life
      - Creating mindful habits
      - Mindful eating
      - Mindful technology use
      - Overcoming common obstacles

      Week 7: Working with Difficult Experiences
      - Mindfulness for anxiety
      - Working with pain
      - Dealing with sleep issues
      - Mindfulness during stressful times

      Week 8: Establishing a Personal Practice
      - Creating a sustainable routine
      - Working with motivation challenges
      - Finding community support
      - Continuing your mindfulness journey

      Each week includes:
      - Two video lessons (20-30 minutes each)
      - Guided meditation practices
      - Practical exercises for daily life
      - Reflection questions
      - Recommended readings

      Course instructor Maya Patel has been teaching mindfulness for over 10 years and brings a warm, accessible teaching style that makes complex concepts easy to understand. She combines scientific knowledge with personal experience to create a learning environment that is both informative and supportive.

      Participants report:
      - 40% reduction in stress levels
      - 30% improvement in sleep quality
      - 25% increase in focus and attention
      - 35% improvement in emotional regulation

      The course includes lifetime access to all materials, a private community forum for discussion and support, and monthly live Q&A sessions with the instructor.`
    },
    {
      id: 'med3',
      title: 'Living with Bipolar Disorder',
      creator: 'Mental Health Foundation',
      type: 'Documentary',
      description: 'Personal stories of individuals living with bipolar disorder, sharing their challenges and triumphs.',
      content: 'This powerful documentary features three individuals at different stages of their journey with bipolar disorder. They share their experiences with diagnosis, treatment, relationships, and finding stability. Mental health professionals provide context and explain the latest treatment approaches. The film aims to reduce stigma and provide hope to those affected by bipolar disorder.',
      duration: '58 min',
      year: 2022,
      tags: ['bipolar disorder', 'documentary', 'personal stories', 'stigma reduction'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2016/11/14/04/57/mental-illness-1822455_640.png',
      fullContent: `Living with Bipolar Disorder is an intimate documentary that follows three individuals — Priya, 28; Raj, 45; and Anjali, 62 — as they navigate life with bipolar disorder. Through their stories, the film provides an honest look at the challenges and triumphs of living with this complex condition.

      The documentary is structured around key themes:
      
      1. Diagnosis Journey
      Each participant shares their path to diagnosis, which for many was long and complicated. Priya describes being misdiagnosed with depression for years before a psychiatrist recognized the pattern of mood swings. Raj talks about the denial he experienced before accepting his diagnosis. Anjali discusses how she was diagnosed later in life after decades of struggling without understanding what was wrong.

      2. Finding Stability
      The film explores how each person has found stability through different combinations of medication, therapy, lifestyle changes, and support systems. They share the strategies that have been most effective for them, from medication management to recognizing early warning signs of mood episodes.

      3. Relationships and Support
      The documentary examines how bipolar disorder affects relationships with family, friends, and romantic partners. Each participant shares how they've navigated these relationships, the challenges they've faced, and the importance of understanding and support from loved ones.

      4. Work and Purpose
      The film looks at how each person has found meaningful work and purpose while managing their condition. Priya talks about adjusting her career expectations, Raj discusses how he's found ways to work around his symptoms, and Anjali shares how she's found purpose in advocacy work.

      5. Hope and Resilience
      Throughout the documentary, themes of hope and resilience emerge. Despite the challenges they face, each participant has found ways to live fulfilling lives with bipolar disorder.

      Interspersed with the personal stories are interviews with mental health professionals who provide context and explain the latest understanding of bipolar disorder and its treatment. Dr. Amit Desai, a psychiatrist specializing in mood disorders, explains the biological basis of the condition and the importance of proper medication management. Dr. Maya Patel, a clinical psychologist, discusses therapeutic approaches that can help individuals with bipolar disorder develop coping strategies.

      The documentary aims to:
      - Reduce stigma around bipolar disorder
      - Provide hope to those affected by the condition
      - Educate family members and friends about how to provide support
      - Encourage early diagnosis and proper treatment

      Since its release, the documentary has been screened at mental health conferences, universities, and community centers across the country. It has received praise for its honest portrayal of life with bipolar disorder and its message of hope and resilience.`
    },
    {
      id: 'med4',
      title: 'The Science of Happiness',
      creator: 'Wellness Research Institute',
      type: 'Video Series',
      description: 'A science-based video series exploring what makes people happy and practical strategies for increasing wellbeing.',
      content: 'This 12-episode video series examines the latest research on happiness and wellbeing. Each episode focuses on a different aspect of happiness, from gratitude and social connections to purpose and meaning. The series features interviews with leading researchers, practical exercises, and real-life examples of people applying these principles in their lives.',
      episodes: 12,
      duration: '25-30 min per episode',
      tags: ['happiness', 'wellbeing', 'positive psychology', 'research'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3138227_640.jpg',
      fullContent: `The Science of Happiness is a 12-episode video series that explores what makes people happy based on the latest research from positive psychology, neuroscience, and other fields. Hosted by Dr. Anjali Sharma, a happiness researcher at the Wellness Research Institute, each episode combines scientific insights with practical applications.

      Episode guide:
      
      Episode 1: The Happiness Set Point
      Explores the genetic and environmental factors that contribute to our baseline level of happiness and how much we can actually change it.

      Episode 2: The Power of Gratitude
      Examines research on gratitude practices and how they can significantly increase happiness and wellbeing.

      Episode 3: Social Connections
      Investigates the importance of relationships for happiness and how to build and maintain meaningful connections.

      Episode 4: The Benefits of Nature
      Explores how spending time in nature affects our mood and cognitive function, with practical tips for incorporating nature into daily life.

      Episode 5: Flow States
      Examines the concept of flow — being completely absorbed in an activity — and how it contributes to happiness and life satisfaction.

      Episode 6: The Role of Purpose
      Investigates how having a sense of purpose contributes to wellbeing and ways to discover or cultivate purpose in life.

      Episode 7: Mindfulness and Happiness
      Explores the connection between mindfulness practices and happiness, with guided exercises for developing mindfulness.

      Episode 8: The Science of Kindness
      Examines how acts of kindness benefit both the giver and receiver, and how to incorporate more kindness into daily life.

      Episode 9: Exercise and Mood
      Investigates the connection between physical activity and mental wellbeing, with recommendations for different types of exercise.

      Episode 10: Sleep and Happiness
      Explores how sleep quality affects mood and cognitive function, with evidence-based strategies for improving sleep.

      Episode 11: Money and Happiness
      Examines the complex relationship between wealth and happiness, and how to use money in ways that promote wellbeing.

      Episode 12: Creating Lasting Change
      Brings together insights from previous episodes to provide a comprehensive approach to increasing happiness and wellbeing.

      Each episode includes:
      - Interviews with leading researchers
      - Practical exercises viewers can try
      - Real-life examples of people applying these principles
      - Recommendations for further reading and resources

      The series is based on the latest research from institutions like Harvard University, Stanford University, and the Greater Good Science Center at UC Berkeley. It presents complex scientific concepts in an accessible, engaging format with practical takeaways for viewers.

      Viewers report that the series has helped them:
      - Understand the science behind happiness
      - Implement practical strategies for increasing wellbeing
      - Make small but meaningful changes in their daily lives
      - Develop a more balanced approach to pursuing happiness`
    },
    {
      id: 'med5',
      title: 'Meditation for Anxiety Relief',
      creator: 'Mindful Living Center',
      type: 'Video Course',
      description: 'A practical video course teaching specific meditation techniques designed to reduce anxiety and promote calm.',
      content: 'This 6-week video course focuses on meditation practices specifically designed to address anxiety. Each week introduces different techniques and builds a comprehensive toolkit for managing anxiety symptoms. The course includes guided meditations, breathing exercises, and cognitive techniques to help break the cycle of anxiety.',
      duration: '6 weeks',
      sessions: 12,
      sessionLength: '15-25 min',
      tags: ['meditation', 'anxiety', 'stress relief', 'breathing exercises'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2019/10/15/01/28/meditation-4549661_640.jpg',
      fullContent: `Meditation for Anxiety Relief is a 6-week video course designed to provide practical tools for managing anxiety through meditation and mindfulness practices. Developed by the Mindful Living Center, this course combines ancient meditation techniques with modern psychological approaches to anxiety management.

      Course structure:
      
      Week 1: Understanding Anxiety
      - The science behind anxiety and how it affects the body and mind
      - Introduction to mindfulness and how it helps with anxiety
      - Basic breathing meditation for immediate relief
      - Body scan meditation for releasing physical tension

      Week 2: Working with Anxious Thoughts
      - Understanding the role of thoughts in anxiety
      - Observing thoughts without getting caught up in them
      - Labeling thoughts to create distance
      - Cognitive defusion techniques

      Week 3: Managing Physical Symptoms
      - Progressive muscle relaxation for physical tension
      - Grounding techniques for when anxiety feels overwhelming
      - Mindful movement for releasing nervous energy
      - Using the breath to calm the nervous system

      Week 4: Facing Fears
      - Understanding avoidance and how it maintains anxiety
      - Using mindfulness to approach feared situations
      - Developing courage and resilience
      - Creating a step-by-step plan for facing fears

      Week 5: Self-Compassion for Anxiety
      - The role of self-criticism in anxiety
      - Developing self-compassion practices
      - Loving-kindness meditation for anxiety
      - Working with the inner critic

      Week 6: Creating an Anxiety-Resilient Lifestyle
      - Building a regular meditation practice
      - Identifying and managing anxiety triggers
      - Creating a personalized anxiety management plan
      - Maintaining progress and preventing relapse

      Each week includes:
      - Two video lessons (15-25 minutes each)
      - Guided meditation practices
      - Practical exercises for daily life
      - Reflection questions
      - Recommended resources

      Course instructor Dr. Priya Nair is a clinical psychologist specializing in anxiety disorders with over 12 years of experience. She brings both professional expertise and personal understanding of anxiety to her teaching, creating a supportive and encouraging learning environment.

      Participants report:
      - 50% reduction in anxiety symptoms
      - 45% improvement in sleep quality
      - 40% increase in ability to manage stressful situations
      - 35% reduction in physical symptoms of anxiety

      The course includes lifetime access to all materials, downloadable guided meditations for offline use, and access to a private community forum for sharing experiences and getting support.`
    }
  ];

  // Mental Health Apps Resources
  const appResources = [
    {
      id: 'app1',
      name: 'MindCare Companion',
      developer: 'MindCare Tech',
      category: 'Mood Tracking',
      description: 'Track your mood, identify patterns, and receive personalized insights for better mental health.',
      content: 'MindCare Companion is a comprehensive mood tracking app that helps you monitor your emotional wellbeing over time. The app uses AI to identify patterns in your mood and provides personalized insights and recommendations. Features include medication reminders, journaling prompts, guided exercises, and the ability to share reports with healthcare providers.',
      price: 'Free with premium options',
      platforms: ['iOS', 'Android'],
      rating: 4.7,
      reviews: 12500,
      tags: ['mood tracking', 'AI insights', 'journaling'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2018/09/04/16/37/smartphone-3653080_640.jpg',
      fullContent: `MindCare Companion is a comprehensive mental health app designed to help users track, understand, and improve their emotional wellbeing. Developed by a team of psychologists and data scientists, this app combines traditional mood tracking with AI-powered insights to provide personalized mental health support.

      Key features:
      
      1. Advanced Mood Tracking
      - Track multiple mood dimensions (energy, stress, anxiety, happiness, etc.)
      - Add context to your mood entries (activities, people, locations)
      - Visualize mood patterns over time with interactive charts
      - Identify triggers and patterns that affect your mood

      2. AI-Powered Insights
      - Receive personalized insights based on your mood data
      - Get early warnings for potential mood episodes
      - Discover correlations between activities and mood
      - Receive recommendations for improving your mental health

      3. Journaling & Reflection
      - Guided journaling prompts based on your current mood
      - Secure private journal with optional mood tagging
      - Reflection questions to deepen self-awareness
      - Gratitude practice with daily prompts

      4. Guided Exercises
      - Access to a library of evidence-based exercises
      - Breathing exercises for immediate stress relief
      - Mindfulness meditations for different needs
      - Cognitive behavioral therapy techniques

      5. Medication & Treatment Tracking
      - Set reminders for medications and appointments
      - Track side effects and effectiveness
      - Monitor treatment progress over time
      - Generate reports to share with healthcare providers

      6. Community Support
      - Anonymous community forums for sharing experiences
      - Support groups moderated by mental health professionals
      - Challenges and programs for improving mental health
      - Option to connect with verified mental health professionals

      Privacy and Security:
      - Bank-level encryption for all data
      - HIPAA-compliant data handling
      - Anonymous participation options
      - Full control over data sharing

      Pricing:
      - Free version includes basic mood tracking and limited exercises
      - Premium subscription ($9.99/month or $59.99/year) includes all features
      - Student discount available (50% off premium subscription)
      - Free premium access for mental health clinics to offer to patients

      User Reviews:
      "MindCare Companion has been a game-changer for managing my depression. The AI insights helped me identify patterns I never would have noticed on my own." - Sarah, 32

      "I love how the app combines mood tracking with practical exercises. It's like having a therapist in my pocket." - Michael, 28

      "The journaling prompts have helped me process my emotions in a way I never could before. Highly recommend!" - Priya, 41

      The app is available for iOS and Android devices and offers a web version for desktop users. New features are added monthly based on user feedback and the latest mental health research.`
    },
    {
      id: 'app2',
      name: 'CalmMind',
      developer: 'Wellness Solutions',
      category: 'Meditation',
      description: 'Guided meditations, sleep stories, and breathing exercises to reduce stress and improve focus.',
      content: 'CalmMind offers a vast library of guided meditations, sleep stories, and breathing exercises designed to reduce stress and improve focus. The app features programs for specific issues like anxiety, insomnia, and pain management. New content is added weekly, and users can customize their experience based on their goals and preferences.',
      price: 'Subscription-based',
      platforms: ['iOS', 'Android', 'Web'],
      rating: 4.8,
      reviews: 28400,
      tags: ['meditation', 'sleep', 'stress reduction'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2020/09/08/06/43/meditation-5554843_640.png',
      fullContent: `CalmMind is a leading meditation and wellness app designed to help users reduce stress, improve sleep, and live more mindfully. With over 100 million downloads worldwide, CalmMind offers a comprehensive suite of features to support mental wellbeing.

      Key features:
      
      1. Guided Meditations
      - Extensive library of guided meditations for all experience levels
      - Meditations for specific needs (anxiety, focus, sleep, etc.)
      - Famous voice narrations including Matthew McConaughey, Stephen Fry, and Tamara Levitt
      - New content added weekly

      2. Sleep Stories
      - Bedtime stories designed to help you fall asleep faster and sleep more soundly
      - Stories read by well-known voices like Stephen Fry and Joanna Lumley
      - Nature sounds and music for relaxation
      - Sleep music and soundscapes

      3. Breathing Programs
      - Structured breathing exercises for immediate stress relief
      - Animated breathing visuals to guide your practice
      - Programs for different needs (calming, energizing, focus)
      - Breathe bubble feature for on-the-go stress management

      4. Masterclasses
      - Exclusive video classes with world-renowned mindfulness experts
      - Topics include mindfulness for relationships, stress management, and personal growth
      - 10-session programs with downloadable materials
      - New masterclasses added monthly

      5. Daily Calm
      - Daily meditations and mindfulness exercises
      - Mindful movement and stretching videos
      - Journaling prompts and reflections
      - Motivational quotes and inspiration

      6. Music for Focus, Relaxation, and Sleep
      - Exclusive music tracks designed to enhance different mental states
      - Nature sounds and ambient music
      - Focus music for work and study
      - Lullabies and sleep music for all ages

      7. Kids Content
      - Age-appropriate meditations and sleep stories for children
      - Breathing exercises and mindful movements
      - Content designed to help children with emotional regulation
      - Parental controls and family sharing options

      Scientific Backing:
      CalmMind's programs are developed in collaboration with mental health professionals and based on scientific research. Studies have shown that regular use of the app can:
      - Reduce stress by up to 40%
      - Improve sleep quality by 35%
      - Increase focus and attention by 25%
      - Decrease symptoms of anxiety and depression

      Pricing:
      - Free limited access with select meditations and breathing exercises
      - Premium subscription ($14.99/month or $69.99/year) for full access
      - Family plan ($99.99/year) for up to 6 accounts
      - Student discount (50% off premium subscription)
      - Free access for K-12 teachers and healthcare professionals

      User Reviews:
      "CalmMind has transformed my sleep. I used to struggle with insomnia, but now I fall asleep within minutes of listening to a sleep story." - David, 45

      "The daily meditations have become an essential part of my morning routine. I feel more centered and less stressed throughout the day." - Emily, 33

      "I've tried many meditation apps, but CalmMind's variety and quality keep me engaged. The masterclasses are particularly insightful." - Raj, 29

      The app is available for iOS, Android, and web platforms, with cross-device synchronization for a seamless experience across all your devices.`
    },
    {
      id: 'app3',
      name: 'ConnectSupport',
      developer: 'Community Health',
      category: 'Peer Support',
      description: 'Connect with others facing similar mental health challenges in a safe, moderated community.',
      content: 'ConnectSupport creates a safe space for individuals to connect with others facing similar mental health challenges. The app offers moderated group discussions, one-on-one peer matching, and access to trained peer supporters. All conversations are confidential and the app includes safety features and crisis resources. Users report feeling less isolated and more understood.',
      price: 'Free',
      platforms: ['iOS', 'Android'],
      rating: 4.5,
      reviews: 8300,
      tags: ['peer support', 'community', 'connection'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/08/07/02/43/people-2604149_640.jpg',
      fullContent: `ConnectSupport is a free mental health peer support app that connects individuals with similar experiences in a safe, moderated environment. Developed in partnership with mental health organizations, this app aims to reduce isolation and provide support between therapy sessions.

      Key features:
      
      1. Peer Support Groups
      - Topic-based support groups (anxiety, depression, bipolar, etc.)
      - Daily moderated discussions
      - Anonymous participation options
      - Scheduled live group sessions with mental health professionals

      2. One-on-One Peer Matching
      - Matched with trained peer supporters based on your specific needs
      - Private messaging with your matched peer supporter
      - Regular check-ins and support
      - Option to change peer supporters if needed

      3. Community Forums
      - Discussion boards on various mental health topics
      - Resource sharing and recommendations
      - Success stories and recovery journeys
      - Anonymously ask questions to the community

      4. Wellness Tools
      - Mood and symptom tracking
      - Crisis planning and safety resources
      - Guided exercises for managing difficult emotions
      - Reminders for self-care activities

      5. Professional Resources
      - Directory of mental health professionals
      - Information about different treatment options
      - Resource library with articles and videos
      - Crisis helpline numbers and emergency resources

      6. Privacy and Safety
      - Anonymous participation options
      - All groups and forums moderated by trained professionals
      - Report and block features for inappropriate content
      - Crisis intervention protocols for at-risk users

      Safety Features:
      - 24/7 crisis support team
      - Automatic alerts for concerning content
      - Direct connection to crisis helplines
      - Emergency contact features for trusted individuals
      - Safety planning tools and resources

      Community Guidelines:
      - Respectful and supportive communication
      - No medical advice or diagnosis
      - Confidentiality and privacy protection
      - Zero tolerance for harassment or discrimination
      - Evidence-based information only

      Impact:
      Since its launch, ConnectSupport has helped over 500,000 users:
      - 85% report feeling less isolated
      - 78% say the app helped them between therapy sessions
      - 72% report improved ability to manage symptoms
      - 65% say they feel more understood by others

      User Reviews:
      "ConnectSupport has been a lifeline for me. Talking to others who truly understand what I'm going through has made such a difference in my recovery journey." - Maya, 27

      "I was hesitant to try peer support at first, but the trained peer supporters are knowledgeable and compassionate. It's like having a friend who gets it." - Alex, 34

      "The anonymous option allowed me to open up about things I've never shared before. The community is so supportive and non-judgmental." - Sam, 42

      The app is completely free with no ads or premium features. ConnectSupport is funded by grants and donations to ensure accessibility for everyone who needs support.`
    },
    {
      id: 'app4',
      name: 'MoodTools',
      developer: 'Mental Health Tech',
      category: 'Self-Help',
      description: 'Evidence-based self-help tools for managing depression, anxiety, and stress based on cognitive behavioral therapy.',
      content: "MoodTools provides evidence-based self-help techniques and tools for managing depression, anxiety, and stress. Based on cognitive behavioral therapy (CBT) principles, the app includes thought journaling, activity scheduling, relaxation techniques, and a safety plan. It's designed to be used alongside professional treatment or as a self-help resource.",
      price: 'Free',
      platforms: ['iOS', 'Android'],
      rating: 4.6,
      reviews: 15600,
      tags: ['CBT', 'self-help', 'depression', 'anxiety'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/09/16/computer-1859696_640.jpg',
      fullContent: `MoodTools is a free, evidence-based app designed to help people manage depression, anxiety, and stress using cognitive behavioral therapy (CBT) techniques. Developed by mental health professionals, this app provides practical tools that can be used independently or alongside professional treatment.

      Key features:
      
      1. Thought Journal
      - Record and analyze your thoughts using CBT principles
      - Identify negative thought patterns
      - Challenge and reframe unhelpful thoughts
      - Track changes in thinking patterns over time

      2. Activity Scheduler
      - Plan and schedule pleasant activities
      - Track your mood before and after activities
      - Set goals for increasing positive experiences
      - Monitor progress over time

      3. Relaxation Techniques
      - Guided relaxation exercises
      - Progressive muscle relaxation
      - Breathing exercises for immediate stress relief
      - Guided imagery for calming the mind

      4. Mood Tracking
      - Daily mood ratings and tracking
      - Identify patterns and triggers
      - Add context to mood entries
      - Generate mood reports to share with professionals

      5. Safety Plan
      - Create a personalized safety plan for crisis situations
      - Include warning signs, coping strategies, and support contacts
      - Quick access to emergency resources
      - Share your safety plan with trusted contacts

      6. Information and Resources
      - Educational content about depression and anxiety
      - CBT techniques and exercises
      - Information about when and how to seek professional help
      - Directory of mental health resources

      7. Customizable Reminders
      - Set reminders for self-care activities
      - Medication reminders
      - Appointment reminders
      - Check-in reminders for mood tracking

      Evidence Base:
      MoodTools is based on CBT, one of the most well-researched therapeutic approaches for depression and anxiety. Studies have shown that CBT can be as effective as medication for mild to moderate depression and can enhance the effects of medication for more severe cases.

      Research on MoodTools specifically has found:
      - 72% of users report reduced symptoms of depression
      - 68% report reduced symptoms of anxiety
      - 65% report improved ability to cope with stress
      - 60% report improved overall wellbeing

      Privacy and Security:
      - All data stored locally on your device
      - No account or personal information required
      - Optional password protection for sensitive content
      - No data sharing with third parties

      User Reviews:
      "MoodTools has been incredibly helpful for managing my depression. The thought journal feature has helped me identify and challenge negative thinking patterns." - Jamie, 29

      "I use this app alongside therapy, and my therapist says it's helped me make faster progress. The activity scheduler has been particularly useful." - Taylor, 36

      "The safety plan feature gives me peace of mind. Knowing I have a plan and resources available when I'm struggling makes me feel more in control." - Morgan, 24

      MoodTools is completely free with no ads or in-app purchases. It's available in multiple languages and has been downloaded over 2 million times worldwide. The app is recommended by mental health professionals as a supplement to treatment or for self-help when professional help isn't accessible.`
    },
    {
      id: 'app5',
      name: 'SleepCycle',
      developer: 'SleepTech Solutions',
      category: 'Sleep',
      description: 'Intelligent alarm clock that analyzes your sleep patterns and wakes you during your lightest sleep phase.',
      content: 'SleepCycle is an intelligent alarm clock that tracks your sleep patterns and wakes you during your lightest sleep phase, helping you wake up feeling refreshed and rested. The app also provides detailed sleep analysis and insights to help you understand and improve your sleep quality over time.',
      price: 'Free with premium options',
      platforms: ['iOS', 'Android'],
      rating: 4.4,
      reviews: 22000,
      tags: ['sleep', 'alarm', 'sleep analysis', 'wellbeing'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/12/03/18/04/bedroom-2995586_640.jpg',
      fullContent: `SleepCycle is an intelligent alarm clock and sleep tracker that analyzes your sleep patterns and wakes you during your lightest sleep phase. By waking you at the optimal time in your sleep cycle, the app helps you feel more rested and refreshed, even with the same amount of sleep.

      Key features:
      
      1. Intelligent Alarm Clock
      - Wakes you during your lightest sleep phase within a 30-minute window
      - Uses sound analysis to track sleep stages without wearable devices
      - Gradual wake-up phase that simulates natural waking
      - Backup alarm option to ensure you wake up on time

      2. Sleep Analysis
      - Detailed sleep analysis showing sleep stages (light, deep, REM)
      - Sleep quality score based on sleep patterns
      - Sleep trends over time
      - Comparison with age and gender averages

      3. Sleep Notes
      - Track factors that might affect your sleep (caffeine, exercise, stress, etc.)
      - Identify correlations between activities and sleep quality
      - Weather data integration to analyze environmental factors
      - Customizable tags for personal sleep influencers

      4. Sleep Aid Sounds
      - Library of soothing sounds to help you fall asleep
      - Nature sounds, white noise, and ambient music
      - Fade-out timer for automatic shutoff
      - Option to create custom soundscapes

      5. Smart Wake-up Window
      - Set a time window (e.g., 6:30-7:00 AM) instead of a specific time
      - The app will wake you at the optimal time within that window
      - Helps avoid waking during deep sleep
      - Particularly useful for those with irregular schedules

      6. Online Backup and Sync
      - Secure cloud backup of your sleep data
      - Sync across multiple devices
      - Long-term sleep trend analysis
      - Export data for sharing with healthcare providers

      Scientific Backing:
      SleepCycle is based on research on sleep cycles and chronobiology. Studies have shown that waking during light sleep:
      - Reduces sleep inertia (grogginess upon waking)
      - Improves morning alertness and cognitive performance
      - Enhances mood throughout the day
      - Reduces the stress hormone cortisol upon waking

      User Experience:
      Users report significant improvements in how they feel upon waking:
      - 76% report feeling more refreshed in the morning
      - 71% report reduced grogginess
      - 68% report better mood throughout the day
      - 62% report improved productivity

      Pricing:
      - Free version includes basic alarm and sleep tracking
      - Premium subscription ($29.99/year) includes advanced analysis, sleep notes, and online backup
      - Lifetime premium option ($49.99)
      - Family plan for up to 5 accounts ($39.99/year)

      User Reviews:
      "SleepCycle has completely changed how I feel in the mornings. I used to wake up feeling groggy no matter how much sleep I got, but now I wake up feeling naturally refreshed." - Jordan, 31

      "The sleep analysis has helped me identify factors that were affecting my sleep quality. I've made changes based on the insights and my sleep has improved significantly." - Avery, 28

      "I love the smart wake-up window feature. As someone with an irregular schedule, it's perfect for ensuring I wake up at the right time in my sleep cycle." - Casey, 35

      SleepCycle is available for iOS and Android devices and integrates with Apple Health and Google Fit for comprehensive health tracking.`
    }
  ];

  // Online Communities Resources
  const communityResources = [
    {
      id: 'com1',
      name: 'Mental Health India Forum',
      type: 'Discussion Forum',
      description: 'A supportive community for Indians to discuss mental health, share experiences, and find resources.',
      content: 'This forum provides a safe space for Indians to discuss mental health challenges, share personal experiences, and find local resources. The community is moderated by mental health professionals and trained volunteers. Regular discussions cover topics like managing specific conditions, navigating the healthcare system, and supporting family members with mental illness.',
      members: 25000,
      posts: 185000,
      activity: 'Very High',
      tags: ['discussion', 'indian community', 'resources'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2016/11/08/05/08/volunteers-1807505_640.jpg',
      fullContent: `Mental Health India Forum is a vibrant online community dedicated to supporting mental health awareness and support across India. Founded in 2015, this forum has grown to become one of the largest mental health communities in the country, with over 25,000 members and nearly 200,000 posts.

      Community Features:
      
      1. Discussion Forums
      - Topic-based discussions on various mental health conditions
      - Regional sub-forums for location-specific resources
      - Language-specific sections (Hindi, English, Tamil, Bengali, etc.)
      - Anonymous posting options for sensitive topics

      2. Expert Q&A Sessions
      - Monthly sessions with mental health professionals
      - AMAs with psychiatrists, psychologists, and counselors
      - Topic-specific expert discussions
      - Archived sessions for reference

      3. Resource Directory
      - Comprehensive directory of mental health professionals across India
      - User reviews and ratings for healthcare providers
      - Information about mental health services by region
      - Free and low-cost resources for those with financial constraints

      4. Support Groups
      - Condition-specific support groups (depression, anxiety, bipolar, etc.)
      - Groups for family members and caregivers
      - Professionally moderated group discussions
      - Private group options for sensitive topics

      5. Awareness Campaigns
      - Regular mental health awareness campaigns
      - User-generated content and stories
      - Collaboration with mental health organizations
      - Social media integration for broader reach

      Community Guidelines:
      - Respectful and supportive communication
      - No medical advice or diagnosis
      - Confidentiality and privacy protection
      - Zero tolerance for stigma or discrimination
      - Evidence-based information only

      Moderation and Safety:
      - All forums moderated by mental health professionals
      - 24/7 moderation team
      - Clear reporting mechanisms for inappropriate content
      - Crisis intervention protocols for at-risk users
      - Partnership with mental health helplines

      Impact:
      Since its inception, the forum has:
      - Connected over 25,000 Indians seeking mental health support
      - Helped thousands find appropriate mental healthcare
      - Reduced stigma through open discussion and education
      - Created a supportive community for those feeling isolated

      User Experiences:
      "This forum has been a lifeline for me. Living in a small town, I had no access to mental health resources, but through this community, I found support and eventually connected with a therapist in a nearby city." - Priya, 32

      "As a family member of someone with mental illness, the caregiver support group has been invaluable. I've learned so much from others in similar situations." - Rajesh, 45

      "I was hesitant to seek help due to stigma, but reading others' stories here gave me the courage to take that first step." - Amit, 28

      The forum is completely free to use and is funded through grants and donations to ensure accessibility for all Indians regardless of their financial situation.`
    },
    {
      id: 'com2',
      name: 'Anxiety Support Group',
      type: 'Support Group',
      description: 'Weekly virtual support group for people living with anxiety disorders, facilitated by mental health professionals.',
      content: 'This support group meets weekly via video conference and is facilitated by mental health professionals. Sessions provide a structured environment for sharing experiences, learning coping strategies, and receiving support from others who understand the challenges of living with anxiety. The group follows confidentiality guidelines and offers both daytime and evening options.',
      members: 450,
      meetingFrequency: 'Weekly',
      format: 'Video Conference',
      tags: ['anxiety', 'support group', 'professional facilitated'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/05/12/11/58/meeting-2307434_640.jpg',
      fullContent: `The Anxiety Support Group is a professionally facilitated online support group designed to help individuals living with anxiety disorders connect, share experiences, and learn coping strategies in a safe, supportive environment. Established in 2018, this group has helped over 450 people manage their anxiety symptoms and improve their quality of life.

      Group Structure:
      
      1. Weekly Meetings
      - 90-minute sessions held weekly via secure video conference
      - Both daytime (Tuesday 2:00 PM) and evening (Thursday 7:00 PM) options
      - Maximum of 12 participants per session to ensure everyone can share
      - Separate groups for different anxiety disorders when needed

      2. Session Format
      - Check-in: Brief update on how each member is doing
      - Topic discussion: Focused discussion on a specific aspect of anxiety
      - Skill building: Learn and practice coping strategies
      - Open sharing: Time for members to share current challenges and successes
      - Closing: Positive takeaway and goal for the week

      3. Topics Covered
      - Understanding anxiety and its physical symptoms
      - Cognitive strategies for managing anxious thoughts
      - Relaxation techniques and breathing exercises
      - Exposure therapy principles and exercises
      - Lifestyle factors that affect anxiety
      - Medication management and communication with healthcare providers
      - Building resilience and preventing relapse

      4. Professional Facilitation
      - Led by licensed mental health professionals
      - Evidence-based approaches and techniques
      - Crisis intervention protocols when needed
      - Referral to additional resources when appropriate

      Confidentiality and Safety:
      - All participants must agree to confidentiality guidelines
      - Secure video conference platform with end-to-end encryption
      - No recordings of sessions
      - Professional facilitators trained in crisis management
      - Clear protocols for emergencies

      Participant Requirements:
      - Must be 18 years or older
      - Must have a diagnosis of an anxiety disorder from a healthcare provider
      - Must be in stable condition (not in crisis)
      - Must commit to regular attendance (at least 3 out of 4 sessions monthly)
      - Must respect group guidelines and confidentiality

      Benefits Reported by Participants:
      - 78% report reduced anxiety symptoms
      - 82% feel less isolated in their experience with anxiety
      - 75% report improved ability to use coping strategies
      - 70% report improved quality of life
      - 65% report reduced need for emergency interventions

      Participant Experiences:
      "This group has been a game-changer for me. Knowing that others understand what I'm going through has made me feel less alone and more motivated to work on my anxiety." - Maya, 34

      "The coping strategies we learn and practice in group have been more helpful than anything I tried on my own. Having a safe space to practice them makes all the difference." - Raj, 29

      "I was skeptical about online support groups, but the professional facilitation makes this different. The structure and guidance have helped me make real progress." - Priya, 41

      The group is free to join, but donations are appreciated to help cover costs. Participants must complete an intake process and screening before joining to ensure the group is appropriate for their needs.`
    },
    {
      id: 'com3',
      name: 'Caregivers Circle',
      type: 'Community',
      description: 'A dedicated community for family members and caregivers supporting loved ones with mental health conditions.',
      content: 'Caregivers Circle recognizes the unique challenges faced by those supporting loved ones with mental health conditions. This community offers practical resources, emotional support, and education specifically for caregivers. Members share strategies for self-care, navigating healthcare systems, and maintaining healthy relationships while providing care.',
      members: 3200,
      focus: 'Caregiver Support',
      resources: 'Comprehensive',
      tags: ['caregivers', 'family support', 'self-care'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/03/14/21/29/together-2142523_640.jpg',
      fullContent: `Caregivers Circle is a specialized community dedicated to supporting family members, friends, and partners who care for individuals with mental health conditions. Founded by caregivers and mental health professionals, this community recognizes the unique challenges and stresses faced by those in supporting roles.

      Community Features:
      
      1. Discussion Forums
      - Caregiver-specific discussion topics
      - Condition-specific support (depression, bipolar, schizophrenia, etc.)
      - Relationship challenges and solutions
      - Navigating healthcare systems and insurance

      2. Resource Library
      - Educational materials about different mental health conditions
      - Guides for supporting loved ones effectively
      - Information about treatments and medications
      - Legal and financial resources for caregivers

      3. Support Groups
      - General caregiver support groups
      - Condition-specific support groups
      - Groups for specific relationships (spouses, parents, children, etc.)
      - Groups for those supporting individuals in crisis

      4. Self-Care Resources
      - Stress management techniques for caregivers
      - Burnout prevention strategies
      - Setting healthy boundaries
      - Maintaining personal wellbeing while caregiving

      5. Professional Connections
      - Directory of therapists specializing in family therapy
      - Consultation services with mental health professionals
      - Educational webinars and workshops
      - Referrals to respite care services

      Community Guidelines:
      - Respectful and supportive communication
      - Confidentiality and privacy protection
      - No medical advice or diagnosis
      - Focus on caregiver experiences and needs
      - Zero tolerance for judgment or criticism

      Special Programs:
      
      1. Caregiver Education Series
      - Monthly educational webinars on caregiving topics
      - Expert Q&A sessions with mental health professionals
      - Workshops on specific caregiving skills
      - Resource guides and workbooks

      2. Respite Connections
      - Information about respite care options
      - Connection to respite care services
      - Community volunteer matching for temporary relief
      - Emergency caregiver support options

      3. Advocacy Support
      - Guidance on advocating for loved ones in healthcare settings
      - Information about patient rights and healthcare navigation
      - Support for dealing with legal and financial challenges
      - Connection to advocacy organizations

      Impact:
      Since its founding in 2017, Caregivers Circle has:
      - Supported over 3,200 caregivers
      - Helped prevent caregiver burnout in 78% of active members
      - Improved relationships between caregivers and their loved ones in 65% of cases
      - Increased caregiver knowledge about mental health conditions by 85%

      Member Experiences:
      "Caregivers Circle has been my lifeline. Before joining, I felt completely alone in caring for my husband with depression. Now I have strategies, support, and hope." - Anita, 52

      "The self-care resources have been invaluable. I was burning out trying to care for everyone but myself. This community helped me understand that taking care of myself is essential to being a good caregiver." - Vikram, 45

      "I've learned so much about my daughter's condition and how to support her effectively. The educational resources have made me a better advocate for her in healthcare settings." - Priya, 38

      Caregivers Circle is free to join and offers both online and in-person meeting options in select cities. The community is funded through grants and donations to ensure accessibility for all caregivers regardless of their financial situation.`
    },
    {
      id: 'com4',
      name: 'LGBTQ+ Mental Health Support',
      type: 'Support Group',
      description: 'A safe and affirming space for LGBTQ+ individuals to discuss mental health challenges specific to their community.',
      content: 'This support group provides a safe, affirming space for LGBTQ+ individuals to discuss mental health challenges specific to their community. Facilitated by mental health professionals with expertise in LGBTQ+ issues, the group addresses topics like minority stress, coming out, relationship challenges, and finding LGBTQ+ affirming mental healthcare.',
      members: 1800,
      meetingFrequency: 'Weekly',
      format: 'Video Conference',
      tags: ['LGBTQ+', 'minority stress', 'affirming care'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2016/08/12/20/34/rainbow-1588328_640.jpg',
      fullContent: `LGBTQ+ Mental Health Support is a specialized support group designed to address the unique mental health challenges faced by LGBTQ+ individuals. Founded in 2019, this group provides a safe, affirming space where members can discuss their experiences without fear of judgment or misunderstanding.

      Group Features:
      
      1. Weekly Support Meetings
      - 90-minute sessions held weekly via secure video conference
      - Separate groups for different age groups when appropriate
      - Maximum of 10 participants per session to ensure everyone can share
      - Both general and topic-specific meetings

      2. Specialized Topics
      - Minority stress and its impact on mental health
      - Coming out processes at different life stages
      - Relationship challenges in LGBTQ+ relationships
      - Finding and navigating LGBTQ+ affirming healthcare
      - Intersectionality (how multiple identities affect mental health)
      - Family acceptance and rejection
      - Building resilience and community support

      3. Affirming Environment
      - LGBTQ+ facilitators with relevant expertise
      - Inclusive language and terminology
      - Respect for diverse identities and experiences
      - Zero tolerance for transphobia, homophobia, or biphobia
      - Celebration of LGBTQ+ identities and culture

      4. Resource Connections
      - Directory of LGBTQ+ affirming mental health providers
      - Information about LGBTQ+ community resources
      - Guidance on navigating healthcare systems
      - Support for legal and discrimination challenges
      - Connection to LGBTQ+ community organizations

      5. Crisis Support
      - LGBTQ+ specific crisis resources
      - Trained facilitators familiar with LGBTQ+ issues
      - Connection to LGBTQ+ crisis hotlines
      - Safety planning for those in unsupportive environments
      - Emergency housing resources when needed

      Participant Experiences:
      "This group has been life-changing for me. As a trans person, I've struggled to find mental health support that truly understands my experiences. Here, I don't have to explain myself or educate others about basic aspects of my identity." - Alex, 29

      "Coming out later in life has been challenging. This group has helped me navigate the complex emotions and relationship changes that come with that process. I finally feel seen and understood." - Jordan, 52

      "The minority stress framework has helped me understand why I've struggled with anxiety and depression. It's not just me—it's the impact of living in a world that isn't always accepting. This group has given me tools to cope and thrive." - Taylor, 35

      Impact:
      Since its inception, the group has:
      - Supported over 1,800 LGBTQ+ individuals
      - Helped 85% of members develop effective coping strategies
      - Connected 70% of members with LGBTQ+ affirming healthcare
      - Reduced feelings of isolation in 90% of participants
      - Improved mental health symptoms in 75% of regular attendees

      The group is free to join and welcomes LGBTQ+ individuals at all stages of their journey, from questioning to identifying, and from closeted to out. Allies are welcome in some sessions but must respect the space as primarily for LGBTQ+ individuals.`
    },
    {
      id: 'com5',
      name: 'Young Adults Mental Health Community',
      type: 'Community',
      description: 'A supportive community specifically for young adults (18-30) navigating mental health challenges during life transitions.',
      content: 'This community addresses the unique mental health challenges faced by young adults during major life transitions like leaving home, starting college or work, and forming adult relationships. The community offers peer support, practical resources, and professional guidance tailored to young adult experiences.',
      members: 4100,
      focus: 'Young Adult Support',
      resources: 'Age-Specific',
      tags: ['young adults', 'life transitions', 'peer support'],
      link: '#',
      image: 'https://cdn.pixabay.com/photo/2017/02/16/23/05/college-2072693_640.jpg',
      fullContent: `Young Adults Mental Health Community is a specialized support platform designed to address the unique mental health challenges faced by people aged 18-30. This period of life involves significant transitions and stressors, including leaving home, starting college or work, forming adult relationships, and establishing independence.

      Community Features:
      
      1. Age-Specific Discussion Forums
      - Topics relevant to young adult experiences
      - College and university mental health resources
      - Career and workplace stress discussions
      - Relationship and social challenges
      - Financial stress and independence

      2. Transition Support
      - High school to college transition resources
      - Moving away from home support
      - First job and career navigation
      - Developing adult relationships
      - Establishing independence

      3. Peer Support Groups
      - General young adult support
      - College student support groups
      - Young professionals support
      - Specific issue groups (anxiety, depression, etc.)
      - Identity-based groups (LGBTQ+, students of color, etc.)

      4. Resource Library
      - Age-appropriate mental health information
      - Campus and workplace mental health resources
      - Guide to navigating healthcare independently
      - Financial planning for mental healthcare
      - Time management and organization tools

      5. Professional Guidance
      - Young adult mental health specialists
      - Career counselors familiar with mental health challenges
      - Academic support resources
      - Life coaching for mental wellness
      - Family communication support

      Special Programs:
      
      1. College Readiness Program
      - Preparing for college mental health challenges
      - Finding campus mental health resources
      - Balancing academics and mental health
      - Making friends and building support systems
      - Managing homesickness and transition anxiety

      2. First Job Survival Guide
      - Navigating workplace mental health
      - Setting boundaries with colleagues and supervisors
      - Managing work-related stress
      - Balancing work and life
      - Disclosing mental health conditions at work

      3. Relationship Skills Workshops
      - Building healthy adult relationships
      - Communication skills
      - Setting boundaries with family
      - Dating and mental health
      - Maintaining long-distance friendships

      Member Experiences:
      "Starting college was overwhelming, and I struggled with anxiety. This community helped me connect with others going through the same thing and find resources on campus. I don't feel so alone anymore." - Maya, 19

      "As a young professional, I've struggled to balance work stress with my mental health. The workplace resources and peer support here have been invaluable." - Raj, 26

      "Moving away from home for the first time was harder than I expected. This community gave me practical strategies for managing homesickness and building a new support system." - Priya, 22

      Impact:
      Since its launch in 2020, the community has:
      - Supported over 4,100 young adults
      - Helped 80% of college students successfully navigate campus mental health resources
      - Improved work-life balance for 75% of young professional members
      - Reduced feelings of isolation in 85% of participants
      - Helped 70% of members develop effective coping strategies for life transitions

      The community is free to join and offers both online and in-person meeting options in select cities. It's designed to be accessible to young adults regardless of their financial situation, with many resources available at no cost.`
    }
  ];

  const backgroundColors = [
    "#e8dff5",
    "#fce1e4",
    "#daeaf6",
    "#fcf4dd",
    "#ddedea",
    "#f0e6f7",
    "#e6f7f6",
    "#fff5e6",
    "#f0f8ff"
  ];

  const categoryColors = {
    government: "#3498db",
    nonprofit: "#2ecc71",
    advocacy: "#e74c3c",
    workplace: "#f39c12",
    digital: "#9b59b6"
  };

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('mindCareDarkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    // Check for saved initiatives
    const saved = localStorage.getItem('savedInitiatives');
    if (saved) {
      setSavedInitiatives(JSON.parse(saved));
    }
    
    // Check for saved items in resources
    const savedResources = localStorage.getItem('mindCareSavedResources');
    if (savedResources) {
      setSavedItems(JSON.parse(savedResources));
    }

    // Handle scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mindCareDarkMode', JSON.stringify(newMode));
  };

  const toggleSaveInitiative = (id) => {
    let updatedSaved;
    if (savedInitiatives.includes(id)) {
      updatedSaved = savedInitiatives.filter(savedId => savedId !== id);
    } else {
      updatedSaved = [...savedInitiatives, id];
    }
    setSavedInitiatives(updatedSaved);
    localStorage.setItem('savedInitiatives', JSON.stringify(updatedSaved));
  };

  const toggleSaveItem = (id) => {
    let updatedSaved;
    if (savedItems.includes(id)) {
      updatedSaved = savedItems.filter(itemId => itemId !== id);
    } else {
      updatedSaved = [...savedItems, id];
    }
    setSavedItems(updatedSaved);
    localStorage.setItem('mindCareSavedResources', JSON.stringify(updatedSaved));
  };

  const toggleCardExpansion = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleExpandedItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const parseItalicText = (text) => {
    // Replace [italic]...[/italic] with <em>...</em>
    const parts = text.split(/(\[italic\]|\[\/italic\])/);
    return parts.map((part, i) => {
      if (part === "[italic]" || part === "[/italic]") return null;
      if (parts[i - 1] === "[italic]") return <em key={i}>{part}</em>;
      return part;
    });
  };

  const loadMoreInitiatives = () => {
    setVisibleInitiatives(prev => prev + 3);
  };

  const filteredInitiatives = initiatives.filter(initiative => {
    const matchesSearch = initiative.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         initiative.text.replace(/\[.*?\]/g, "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || initiative.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Render functions for each resource type
  const renderLibraryContent = () => {
    const filteredResources = libraryResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className="resource-content">
        <div className="resource-search">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '50px',
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#ffffff' : '#333333',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '20px'
            }}
          />
        </div>

        <div className="resource-filters" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: searchTerm === '' 
                ? (darkMode ? '#4a90e2' : '#3498db') 
                : (darkMode ? '#2a2a2a' : '#f1f1f1'),
              color: searchTerm === '' 
                ? 'white' 
                : (darkMode ? '#ffffff' : '#333333'),
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            All
          </button>
          {['depression', 'anxiety', 'sleep', 'mindfulness', 'resilience'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: searchTerm === tag 
                  ? (darkMode ? '#4a90e2' : '#3498db') 
                  : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                color: searchTerm === tag 
                  ? 'white' 
                  : (darkMode ? '#ffffff' : '#333333'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="resources-list" style={{
          display: 'grid',
          gap: '20px'
        }}>
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="resource-item"
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    margin: '0 0 5px 0',
                    color: darkMode ? '#ffffff' : '#2c3e50'
                  }}>
                    {resource.title}
                  </h3>
                  <p style={{
                    margin: '0 0 10px 0',
                    color: darkMode ? '#bbbbbb' : '#666666',
                    fontSize: '0.9rem'
                  }}>
                    By {resource.author} • {resource.type} • {resource.date}
                  </p>
                </div>
                
                <button
                  onClick={() => toggleSaveItem(resource.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    color: savedItems.includes(resource.id) ? '#e74c3c' : (darkMode ? '#bbbbbb' : '#888888')
                  }}
                >
                  {savedItems.includes(resource.id) ? '❤️' : '🤍'}
                </button>
              </div>

              <p style={{
                margin: '0 0 15px 0',
                color: darkMode ? '#dddddd' : '#555555',
                lineHeight: '1.5'
              }}>
                {resource.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <span style={{
                    backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                    color: darkMode ? '#bbbbbb' : '#666666',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {resource.readTime}
                  </span>
                  <span style={{
                    backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                    color: darkMode ? '#bbbbbb' : '#666666',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {resource.difficulty}
                  </span>
                </div>
                
                <button
                  onClick={() => toggleExpandedItem(resource.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: darkMode ? '#4a90e2' : '#3498db',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  {expandedItem === resource.id ? 'Show Less' : 'Read More'}
                </button>
              </div>

              {expandedItem === resource.id && (
                <div style={{
                  marginBottom: '15px',
                  padding: '15px',
                  backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
                  borderRadius: '10px'
                }}>
                  <p style={{
                    margin: '0 0 15px 0',
                    color: darkMode ? '#dddddd' : '#555555',
                    lineHeight: '1.6'
                  }}>
                    {resource.fullText || resource.content}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '15px'
                  }}>
                    {resource.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: darkMode ? '#3a3a3a' : '#e9ecef',
                          color: darkMode ? '#bbbbbb' : '#495057',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          textTransform: 'capitalize'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <a
                  href={resource.link}
                  style={{
                    background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                    transition: "all 0.3s ease",
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Read Full Article
                </a>
                
                <button
                  style={{
                    background: 'none',
                    border: `1px solid ${darkMode ? '#4a90e2' : '#3498db'}`,
                    color: darkMode ? '#4a90e2' : '#3498db',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMediaContent = () => {
    const filteredResources = mediaResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.host && resource.host.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (resource.creator && resource.creator.toLowerCase().includes(searchTerm.toLowerCase())) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className="resource-content">
        <div className="resource-search">
          <input
            type="text"
            placeholder="Search podcasts and videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '50px',
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#ffffff' : '#333333',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '20px'
            }}
          />
        </div>

        <div className="resource-filters" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: searchTerm === '' 
                ? (darkMode ? '#4a90e2' : '#3498db') 
                : (darkMode ? '#2a2a2a' : '#f1f1f1'),
              color: searchTerm === '' 
                ? 'white' 
                : (darkMode ? '#ffffff' : '#333333'),
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            All
          </button>
          {['podcast', 'video', 'mindfulness', 'bipolar', 'happiness', 'meditation'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: searchTerm === tag 
                  ? (darkMode ? '#4a90e2' : '#3498db') 
                  : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                color: searchTerm === tag 
                  ? 'white' 
                  : (darkMode ? '#ffffff' : '#333333'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="resources-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="resource-card"
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                height: '180px',
                overflow: 'hidden'
              }}>
                <img
                  src={resource.image}
                  alt={resource.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                padding: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    margin: '0',
                    color: darkMode ? '#ffffff' : '#2c3e50',
                    flex: 1
                  }}>
                    {resource.title}
                  </h3>
                  
                  <button
                    onClick={() => toggleSaveItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      color: savedItems.includes(resource.id) ? '#e74c3c' : (darkMode ? '#bbbbbb' : '#888888')
                    }}
                  >
                    {savedItems.includes(resource.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <p style={{
                  margin: '0 0 10px 0',
                  color: darkMode ? '#bbbbbb' : '#666666',
                  fontSize: '0.9rem'
                }}>
                  {resource.host ? `By ${resource.host}` : `By ${resource.creator}`} • {resource.type}
                </p>

                <p style={{
                  margin: '0 0 15px 0',
                  color: darkMode ? '#dddddd' : '#555555',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {resource.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  {resource.episodes && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.episodes} episodes
                    </span>
                  )}
                  
                  {resource.duration && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.duration}
                    </span>
                  )}
                  
                  {resource.sessions && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.sessions} sessions
                    </span>
                  )}
                </div>

                {expandedItem === resource.id && (
                  <div style={{
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
                    borderRadius: '10px'
                  }}>
                    <p style={{
                      margin: '0 0 15px 0',
                      color: darkMode ? '#dddddd' : '#555555',
                      lineHeight: '1.6',
                      fontSize: '0.9rem'
                    }}>
                      {resource.fullContent || resource.content}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {resource.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: darkMode ? '#3a3a3a' : '#e9ecef',
                            color: darkMode ? '#bbbbbb' : '#495057',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            textTransform: 'capitalize'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => toggleExpandedItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: darkMode ? '#4a90e2' : '#3498db',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    {expandedItem === resource.id ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  <a
                    href={resource.link}
                    style={{
                      background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                      color: "white",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                      transition: "all 0.3s ease",
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {resource.type === 'Podcast Series' ? 'Listen Now' : 'Watch Now'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAppsContent = () => {
    const filteredResources = appResources.filter(resource =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className="resource-content">
        <div className="resource-search">
          <input
            type="text"
            placeholder="Search mental health apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '50px',
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#ffffff' : '#333333',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '20px'
            }}
          />
        </div>

        <div className="resource-filters" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: searchTerm === '' 
                ? (darkMode ? '#4a90e2' : '#3498db') 
                : (darkMode ? '#2a2a2a' : '#f1f1f1'),
              color: searchTerm === '' 
                ? 'white' 
                : (darkMode ? '#ffffff' : '#333333'),
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            All
          </button>
          {['mood tracking', 'meditation', 'peer support', 'CBT', 'sleep'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: searchTerm === tag 
                  ? (darkMode ? '#4a90e2' : '#3498db') 
                  : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                color: searchTerm === tag 
                  ? 'white' 
                  : (darkMode ? '#ffffff' : '#333333'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="resources-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="resource-card"
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                height: '180px',
                overflow: 'hidden'
              }}>
                <img
                  src={resource.image}
                  alt={resource.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                padding: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    margin: '0',
                    color: darkMode ? '#ffffff' : '#2c3e50',
                    flex: 1
                  }}>
                    {resource.name}
                  </h3>
                  
                  <button
                    onClick={() => toggleSaveItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      color: savedItems.includes(resource.id) ? '#e74c3c' : (darkMode ? '#bbbbbb' : '#888888')
                    }}
                  >
                    {savedItems.includes(resource.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <p style={{
                  margin: '0 0 10px 0',
                  color: darkMode ? '#bbbbbb' : '#666666',
                  fontSize: '0.9rem'
                }}>
                  By {resource.developer} • {resource.category}
                </p>

                <p style={{
                  margin: '0 0 15px 0',
                  color: darkMode ? '#dddddd' : '#555555',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {resource.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '15px'
                  }}>
                    <span style={{
                      color: '#f39c12',
                      marginRight: '5px'
                    }}>
                      ★
                    </span>
                    <span style={{
                      color: darkMode ? '#ffffff' : '#333333',
                      fontWeight: '600'
                    }}>
                      {resource.rating}
                    </span>
                  </div>
                  
                  <span style={{
                    color: darkMode ? '#bbbbbb' : '#666666',
                    fontSize: '0.8rem'
                  }}>
                    ({resource.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                    color: darkMode ? '#bbbbbb' : '#666666',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {resource.price}
                  </span>
                  
                  {resource.platforms.map(platform => (
                    <span
                      key={platform}
                      style={{
                        backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                        color: darkMode ? '#bbbbbb' : '#666666',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {expandedItem === resource.id && (
                  <div style={{
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
                    borderRadius: '10px'
                  }}>
                    <p style={{
                      margin: '0 0 15px 0',
                      color: darkMode ? '#dddddd' : '#555555',
                      lineHeight: '1.6',
                      fontSize: '0.9rem'
                    }}>
                      {resource.fullContent || resource.content}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {resource.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: darkMode ? '#3a3a3a' : '#e9ecef',
                            color: darkMode ? '#bbbbbb' : '#495057',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            textTransform: 'capitalize'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => toggleExpandedItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: darkMode ? '#4a90e2' : '#3498db',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    {expandedItem === resource.id ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  <a
                    href={resource.link}
                    style={{
                      background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                      color: "white",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                      transition: "all 0.3s ease",
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCommunitiesContent = () => {
    const filteredResources = communityResources.filter(resource =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
      <div className="resource-content">
        <div className="resource-search">
          <input
            type="text"
            placeholder="Search communities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '50px',
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#ffffff' : '#333333',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '20px'
            }}
          />
        </div>

        <div className="resource-filters" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setSearchTerm('')}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: searchTerm === '' 
                ? (darkMode ? '#4a90e2' : '#3498db') 
                : (darkMode ? '#2a2a2a' : '#f1f1f1'),
              color: searchTerm === '' 
                ? 'white' 
                : (darkMode ? '#ffffff' : '#333333'),
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            All
          </button>
          {['support', 'caregivers', 'discussion', 'LGBTQ+', 'young adults'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              style={{
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: searchTerm === tag 
                  ? (darkMode ? '#4a90e2' : '#3498db') 
                  : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                color: searchTerm === tag 
                  ? 'white' 
                  : (darkMode ? '#ffffff' : '#333333'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="resources-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="resource-card"
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                height: '180px',
                overflow: 'hidden'
              }}>
                <img
                  src={resource.image}
                  alt={resource.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                padding: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    margin: '0',
                    color: darkMode ? '#ffffff' : '#2c3e50',
                    flex: 1
                  }}>
                    {resource.name}
                  </h3>
                  
                  <button
                    onClick={() => toggleSaveItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      color: savedItems.includes(resource.id) ? '#e74c3c' : (darkMode ? '#bbbbbb' : '#888888')
                    }}
                  >
                    {savedItems.includes(resource.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <p style={{
                  margin: '0 0 10px 0',
                  color: darkMode ? '#bbbbbb' : '#666666',
                  fontSize: '0.9rem'
                }}>
                  {resource.type}
                </p>

                <p style={{
                  margin: '0 0 15px 0',
                  color: darkMode ? '#dddddd' : '#555555',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {resource.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  {resource.members && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.members.toLocaleString()} members
                    </span>
                  )}
                  
                  {resource.posts && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.posts.toLocaleString()} posts
                    </span>
                  )}
                  
                  {resource.meetingFrequency && (
                    <span style={{
                      backgroundColor: darkMode ? '#1a1a2e' : '#f1f1f1',
                      color: darkMode ? '#bbbbbb' : '#666666',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {resource.meetingFrequency}
                    </span>
                  )}
                </div>

                {expandedItem === resource.id && (
                  <div style={{
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
                    borderRadius: '10px'
                  }}>
                    <p style={{
                      margin: '0 0 15px 0',
                      color: darkMode ? '#dddddd' : '#555555',
                      lineHeight: '1.6',
                      fontSize: '0.9rem'
                    }}>
                      {resource.fullContent || resource.content}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {resource.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: darkMode ? '#3a3a3a' : '#e9ecef',
                            color: darkMode ? '#bbbbbb' : '#495057',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            textTransform: 'capitalize'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => toggleExpandedItem(resource.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: darkMode ? '#4a90e2' : '#3498db',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    {expandedItem === resource.id ? 'Show Less' : 'Learn More'}
                  </button>
                  
                  <a
                    href={resource.link}
                    style={{
                      background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                      color: "white",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                      transition: "all 0.3s ease",
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div 
      className={`initiatives-page ${darkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
        color: darkMode ? '#ffffff' : '#2c3e50',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Header Section */}
      <header className="initiatives-header" style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #2c3e50, #34495e)' 
          : 'linear-gradient(135deg, #4a90e2, #5dade2)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("https://cdn.pixabay.com/photo/2017/09/12/11/56/brain-2740461_1280.jpg") center/cover',
          opacity: 0.2,
          zIndex: 0
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            Mental Health Initiatives
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            Discover organizations and programs dedicated to improving mental health support and awareness worldwide. 
            These initiatives are making a difference in communities through education, research, and direct services.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => navigate('/self-assessment')}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 25px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Take Self Assessment
            </button>
            
            <button
              onClick={() => navigate('/therapists')}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 25px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Find a Therapist
            </button>
            
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-filter-section" style={{
        padding: '30px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto',
            width: '100%'
          }}>
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 50px 15px 20px',
                borderRadius: '50px',
                border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#ffffff' : '#333333',
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
              color: darkMode ? '#bbbbbb' : '#888888'
            }}>
              🔍
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <button
              onClick={() => setFilterCategory("all")}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: filterCategory === "all" 
                  ? (darkMode ? '#4a90e2' : '#3498db') 
                  : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                color: filterCategory === "all" 
                  ? 'white' 
                  : (darkMode ? '#ffffff' : '#333333'),
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              All
            </button>
            
            {Object.keys(categoryColors).map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: filterCategory === category 
                    ? categoryColors[category] 
                    : (darkMode ? '#2a2a2a' : '#f1f1f1'),
                  color: filterCategory === category 
                    ? 'white' 
                    : (darkMode ? '#ffffff' : '#333333'),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          color: darkMode ? '#bbbbbb' : '#666666'
        }}>
          {filteredInitiatives.length} initiatives found
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section" style={{
        backgroundColor: darkMode ? '#252538' : '#ffffff',
        padding: '40px 20px',
        margin: '0 auto 40px',
        maxWidth: '1200px',
        borderRadius: '15px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem',
          color: darkMode ? '#ffffff' : '#2c3e50'
        }}>
          Impact at a Glance
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#3498db',
              marginBottom: '10px'
            }}>
              9+
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              Organizations
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2ecc71',
              marginBottom: '10px'
            }}>
              190+
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              Countries Reached
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#e74c3c',
              marginBottom: '10px'
            }}>
              115M+
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              Lives Impacted
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#f39c12',
              marginBottom: '10px'
            }}>
              100+
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              Years of Combined Experience
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div
        className="initiatives-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 40px"
        }}
      >
        <div
          className="initiatives-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px"
          }}
        >
          {filteredInitiatives.slice(0, visibleInitiatives).map((initiative, index) => (
            <div
              key={initiative.id}
              className="initiative-card"
              style={{
                backgroundColor: darkMode ? '#2a2a2a' : backgroundColors[index % backgroundColors.length],
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: categoryColors[initiative.category],
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}>
                {initiative.category}
              </div>
              
              {/* Save Button */}
              <button
                onClick={() => toggleSaveInitiative(initiative.id)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: savedInitiatives.includes(initiative.id) ? '#e74c3c' : (darkMode ? '#bbbbbb' : '#888888')
                }}
              >
                {savedInitiatives.includes(initiative.id) ? '❤️' : '🤍'}
              </button>

              <img
                src={initiative.image}
                alt={`Image for ${initiative.text.replace(/\[.*?\]/g, "")}`}
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "15px",
                  marginBottom: "20px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease"
                }}
                loading="lazy"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '10px',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}>
                {initiative.text.split('[italic]')[1]?.split('[/italic]')[0] || initiative.text.split(' ').slice(0, 3).join(' ')}
              </h3>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                fontSize: '0.9rem',
                color: darkMode ? '#bbbbbb' : '#666666'
              }}>
                <span>📍 {initiative.location}</span>
                <span>📅 {initiative.founded}</span>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: darkMode ? '#dddddd' : '#2c3e50',
                  lineHeight: "1.5",
                  marginBottom: "15px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: expandedCard === initiative.id ? 'none' : '3',
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {parseItalicText(initiative.text)}
              </p>
              
              {/* Expanded Content */}
              {expandedCard === initiative.id && (
                <div style={{
                  marginBottom: '15px',
                  padding: '15px',
                  backgroundColor: darkMode ? '#1a1a2e' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '10px'
                }}>
                  <h4 style={{
                    margin: '0 0 10px 0',
                    color: darkMode ? '#ffffff' : '#2c3e50'
                  }}>
                    Impact
                  </h4>
                  <p style={{
                    margin: '0 0 15px 0',
                    fontSize: '0.9rem',
                    color: darkMode ? '#dddddd' : '#555555'
                  }}>
                    {initiative.impact}
                  </p>
                  
                  <h4 style={{
                    margin: '0 0 10px 0',
                    color: darkMode ? '#ffffff' : '#2c3e50'
                  }}>
                    Services
                  </h4>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    fontSize: '0.9rem',
                    color: darkMode ? '#dddddd' : '#555555'
                  }}>
                    {initiative.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto'
              }}>
                <button
                  onClick={() => toggleCardExpansion(initiative.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: darkMode ? '#4a90e2' : '#3498db',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  {expandedCard === initiative.id ? 'Show Less' : 'Learn More'}
                </button>
                
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                    transition: "all 0.3s ease",
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {visibleInitiatives < filteredInitiatives.length && (
          <div style={{
            textAlign: 'center',
            marginTop: '40px'
          }}>
            <button
              onClick={loadMoreInitiatives}
              style={{
                background: "linear-gradient(45deg, #4a90e2, #5dade2)",
                color: "white",
                border: 'none',
                padding: "12px 30px",
                borderRadius: "30px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(45deg, #3a78d1, #4a90e2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(45deg, #4a90e2, #5dade2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Load More Initiatives
            </button>
          </div>
        )}
      </div>

      {/* Resources Section */}
      <div className="resources-section" style={{
        backgroundColor: darkMode ? '#252538' : '#ffffff',
        padding: '60px 20px',
        margin: '0 auto 40px',
        maxWidth: '1200px',
        borderRadius: '15px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '30px',
          textAlign: 'center',
          color: darkMode ? '#ffffff' : '#2c3e50'
        }}>
          Additional Resources
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              📚
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: darkMode ? '#ffffff' : '#2c3e50'
            }}>
              Mental Health Library
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: darkMode ? '#bbbbbb' : '#666666',
              marginBottom: '15px'
            }}>
              Access articles, research papers, and guides on mental health topics.
            </p>
            <button 
              onClick={() => {
                setShowResources(true);
                setActiveResource('library');
              }}
              style={{
                background: 'none',
                border: `1px solid ${darkMode ? '#4a90e2' : '#3498db'}`,
                color: darkMode ? '#4a90e2' : '#3498db',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Explore
            </button>
          </div>
          
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              🎧
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: darkMode ? '#ffffff' : '#2c3e50'
            }}>
              Podcasts & Videos
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: darkMode ? '#bbbbbb' : '#666666',
              marginBottom: '15px'
            }}>
              Listen to expert talks and personal stories on mental health.
            </p>
            <button 
              onClick={() => {
                setShowResources(true);
                setActiveResource('media');
              }}
              style={{
                background: 'none',
                border: `1px solid ${darkMode ? '#4a90e2' : '#3498db'}`,
                color: darkMode ? '#4a90e2' : '#3498db',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Listen
            </button>
          </div>
          
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              📱
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: darkMode ? '#ffffff' : '#2c3e50'
            }}>
              Mental Health Apps
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: darkMode ? '#bbbbbb' : '#666666',
              marginBottom: '15px'
            }}>
              Discover apps designed to support your mental wellbeing journey.
            </p>
            <button 
              onClick={() => {
                setShowResources(true);
                setActiveResource('apps');
              }}
              style={{
                background: 'none',
                border: `1px solid ${darkMode ? '#4a90e2' : '#3498db'}`,
                color: darkMode ? '#4a90e2' : '#3498db',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Discover
            </button>
          </div>
          
          <div style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: darkMode ? '#1a1a2e' : '#f8f9fa',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              🌐
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: darkMode ? '#ffffff' : '#2c3e50'
            }}>
              Online Communities
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: darkMode ? '#bbbbbb' : '#666666',
              marginBottom: '15px'
            }}>
              Connect with others who share similar experiences and challenges.
            </p>
            <button 
              onClick={() => {
                setShowResources(true);
                setActiveResource('communities');
              }}
              style={{
                background: 'none',
                border: `1px solid ${darkMode ? '#4a90e2' : '#3498db'}`,
                color: darkMode ? '#4a90e2' : '#3498db',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section" style={{
        backgroundColor: darkMode ? '#252538' : '#ffffff',
        padding: '60px 20px',
        margin: '0 auto 40px',
        maxWidth: '1200px',
        borderRadius: '15px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '15px',
          color: darkMode ? '#ffffff' : '#2c3e50'
        }}>
          Stay Updated
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 30px',
          color: darkMode ? '#bbbbbb' : '#666666'
        }}>
          Subscribe to our newsletter to receive the latest updates on mental health initiatives and resources.
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: '15px 20px',
              borderRadius: '50px 0 0 50px',
              border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#ffffff' : '#333333',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button
            style={{
              padding: '15px 25px',
              borderRadius: '0 50px 50px 0',
              border: 'none',
              background: "linear-gradient(45deg, #4a90e2, #5dade2)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: darkMode ? '#1a1a2e' : '#2c3e50',
        color: 'white',
        padding: '40px 20px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📘</a>
          <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>🐦</a>
          <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>📷</a>
          <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>💼</a>
        </div>
        
        <p style={{ margin: 0, opacity: 0.7 }}>
          © {new Date().getFullYear()} MindCare. All rights reserved.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3a78d1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a90e2';
          }}
        >
          ↑
        </button>
      )}

      {/* Resources Modal */}
      {showResources && (
        <div className="resources-modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '1200px',
            height: '90%',
            maxHeight: '900px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              padding: '20px 30px',
              borderBottom: `1px solid ${darkMode ? '#444' : '#eee'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '1.8rem',
                color: darkMode ? '#ffffff' : '#2c3e50'
              }}>
                {activeResource === 'library' && 'Mental Health Library'}
                {activeResource === 'media' && 'Podcasts & Videos'}
                {activeResource === 'apps' && 'Mental Health Apps'}
                {activeResource === 'communities' && 'Online Communities'}
              </h2>
              
              <button
                onClick={() => {
                  setShowResources(false);
                  setActiveResource(null);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: darkMode ? '#ffffff' : '#333333'
                }}
              >
                ×
              </button>
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              borderBottom: `1px solid ${darkMode ? '#444' : '#eee'}`
            }}>
              <button
                onClick={() => setActiveResource('library')}
                style={{
                  flex: 1,
                  padding: '15px',
                  background: activeResource === 'library' 
                    ? (darkMode ? '#2a2a2a' : '#f8f9fa') 
                    : 'none',
                  border: 'none',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontWeight: activeResource === 'library' ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                📚 Library
              </button>
              
              <button
                onClick={() => setActiveResource('media')}
                style={{
                  flex: 1,
                  padding: '15px',
                  background: activeResource === 'media' 
                    ? (darkMode ? '#2a2a2a' : '#f8f9fa') 
                    : 'none',
                  border: 'none',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontWeight: activeResource === 'media' ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                🎧 Media
              </button>
              
              <button
                onClick={() => setActiveResource('apps')}
                style={{
                  flex: 1,
                  padding: '15px',
                  background: activeResource === 'apps' 
                    ? (darkMode ? '#2a2a2a' : '#f8f9fa') 
                    : 'none',
                  border: 'none',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontWeight: activeResource === 'apps' ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                📱 Apps
              </button>
              
              <button
                onClick={() => setActiveResource('communities')}
                style={{
                  flex: 1,
                  padding: '15px',
                  background: activeResource === 'communities' 
                    ? (darkMode ? '#2a2a2a' : '#f8f9fa') 
                    : 'none',
                  border: 'none',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontWeight: activeResource === 'communities' ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                🌐 Communities
              </button>
            </div>

            {/* Content */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 30px'
            }}>
              {!activeResource && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '20px'
                  }}>
                    📚
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    margin: '0 0 15px 0',
                    color: darkMode ? '#ffffff' : '#2c3e50'
                  }}>
                    Explore Mental Health Resources
                  </h3>
                  
                  <p style={{
                    maxWidth: '600px',
                    margin: '0 0 30px 0',
                    color: darkMode ? '#bbbbbb' : '#666666',
                    lineHeight: '1.6'
                  }}>
                    Discover a wide range of resources to support your mental health journey. 
                    From articles and research papers to podcasts, apps, and communities, 
                    find the tools that work best for you.
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    width: '100%',
                    maxWidth: '800px'
                  }}>
                    <button
                      onClick={() => setActiveResource('library')}
                      style={{
                        padding: '30px 20px',
                        borderRadius: '15px',
                        border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                        backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa',
                        color: darkMode ? '#ffffff' : '#333333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '2.5rem' }}>📚</div>
                      <div style={{ fontWeight: '600' }}>Mental Health Library</div>
                      <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                        Articles, research papers, and guides
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveResource('media')}
                      style={{
                        padding: '30px 20px',
                        borderRadius: '15px',
                        border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                        backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa',
                        color: darkMode ? '#ffffff' : '#333333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '2.5rem' }}>🎧</div>
                      <div style={{ fontWeight: '600' }}>Podcasts & Videos</div>
                      <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                        Expert talks and personal stories
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveResource('apps')}
                      style={{
                        padding: '30px 20px',
                        borderRadius: '15px',
                        border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                        backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa',
                        color: darkMode ? '#ffffff' : '#333333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '2.5rem' }}>📱</div>
                      <div style={{ fontWeight: '600' }}>Mental Health Apps</div>
                      <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                        Tools to support your wellbeing
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveResource('communities')}
                      style={{
                        padding: '30px 20px',
                        borderRadius: '15px',
                        border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                        backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa',
                        color: darkMode ? '#ffffff' : '#333333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '2.5rem' }}>🌐</div>
                      <div style={{ fontWeight: '600' }}>Online Communities</div>
                      <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                        Connect with others on similar journeys
                      </div>
                    </button>
                  </div>
                </div>
              )}
              
              {activeResource === 'library' && renderLibraryContent()}
              {activeResource === 'media' && renderMediaContent()}
              {activeResource === 'apps' && renderAppsContent()}
              {activeResource === 'communities' && renderCommunitiesContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Initiatives;
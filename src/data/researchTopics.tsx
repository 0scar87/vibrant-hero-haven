
import { Microscope, Heart, Cloud, Users, Brain, Lightbulb, Book, ChartLine } from 'lucide-react';

export interface ResearchTopic {
  id: string;
  title: string;
  icon: React.ComponentType;
  shortDescription: string;
  imageSrc: string;
  fullDescription: string;
  keyFindings: string[];
  relatedTopics: string[];
}

export const researchTopics: Record<string, ResearchTopic> = {
  'cognitive-behavioral-therapy': {
    id: 'cognitive-behavioral-therapy',
    title: 'Cognitive Behavioral Therapy',
    icon: Brain,
    shortDescription: 'Exploring new frontiers in CBT applications for anxiety disorders and depression.',
    imageSrc: 'https://images.unsplash.com/photo-1494368308039-ed3393ead79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Cognitive Behavioral Therapy (CBT) represents one of the most evidence-based psychological treatments available today. Our research explores innovative applications of CBT methodologies across various mental health conditions, with particular focus on treatment-resistant anxiety disorders and major depressive disorder. Through rigorous clinical trials and neuroimaging studies, we're identifying the precise mechanisms that make CBT effective and developing targeted modifications to enhance outcomes for patients who don't respond to traditional approaches.`,
    keyFindings: [
      'Integrated digital CBT interventions show 43% higher engagement rates than traditional therapy alone.',
      'Mindfulness-enhanced CBT demonstrates superior outcomes for preventing depression relapse compared to standard CBT protocols.',
      'Neural pathway alterations from CBT treatment can be detected within 4-6 weeks using advanced fMRI techniques.',
      'Personalized CBT protocols based on cognitive profiles show 27% improved outcomes compared to standardized approaches.'
    ],
    relatedTopics: ['digital-therapeutics', 'trauma-informed-care', 'sleep-and-mental-health']
  },
  'neuroimaging-studies': {
    id: 'neuroimaging-studies',
    title: 'Neuroimaging Studies on Mental Health',
    icon: Microscope,
    shortDescription: 'Our comprehensive review of recent advancements in neuroimaging techniques for understanding mental health disorders and developing targeted treatments.',
    imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Advances in neuroimaging technology have revolutionized our understanding of the brain mechanisms underlying mental health disorders. Our research synthesizes findings from functional MRI, diffusion tensor imaging, and PET studies to map the neural correlates of depression, anxiety, and trauma-related disorders. By identifying specific brain circuit dysfunctions associated with different symptom profiles, we're developing more precise diagnostic tools and targeted interventions that address the unique neurobiological factors contributing to each individual's condition.`,
    keyFindings: [
      'Machine learning analysis of neuroimaging data can predict treatment response with 76% accuracy across major depression subtypes.',
      'Connectivity patterns between the amygdala and prefrontal cortex represent a reliable biomarker for anxiety severity.',
      'Trauma exposure leaves distinctive neural signatures that persist even after symptomatic recovery.',
      'Neurofeedback training targeting specific brain circuits shows promise for treatment-resistant depression cases.'
    ],
    relatedTopics: ['epigenetics-and-mental-health', 'psychedelic-assisted-therapy', 'digital-therapeutics']
  },
  'science-of-mindfulness': {
    id: 'science-of-mindfulness',
    title: 'The Science of Mindfulness',
    icon: Heart,
    shortDescription: 'Evidence-based research on how mindfulness practices are transforming mental health treatment and prevention strategies.',
    imageSrc: 'https://images.unsplash.com/photo-1513325646077-122a362d1393?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Mindfulness practices have moved from ancient spiritual traditions to the forefront of mental health innovation. Our research examines the neurological, psychological, and physiological effects of sustained mindfulness practice on stress regulation, emotional processing, and cognitive function. Through longitudinal studies and randomized controlled trials, we're documenting both the immediate benefits and long-term protective effects of mindfulness-based interventions across diverse populations and mental health conditions.`,
    keyFindings: [
      'Regular mindfulness meditation practice correlates with increased gray matter density in brain regions responsible for emotion regulation.',
      'Brief (10-minute) daily mindfulness practices over 8 weeks reduce cortisol levels by an average of 23% in high-stress populations.',
      'Mindfulness-Based Cognitive Therapy (MBCT) reduces depression relapse risk by 60% in recurrent depression patients.',
      'Mindfulness training enhances attention control and working memory performance, with effects visible after 4 weeks of practice.'
    ],
    relatedTopics: ['cognitive-behavioral-therapy', 'nature-and-mental-health', 'sleep-and-mental-health']
  },
  'digital-therapeutics': {
    id: 'digital-therapeutics',
    title: 'Digital Therapeutics',
    icon: Cloud,
    shortDescription: 'Next-generation mental health interventions delivered through technology.',
    imageSrc: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Digital therapeutics represent a paradigm shift in mental healthcare delivery, offering evidence-based interventions through mobile apps, virtual reality, and AI-powered platforms. Our research evaluates the efficacy, engagement factors, and implementation strategies for digital mental health tools across different disorders and demographics. We're particularly focused on developing adaptive algorithms that personalize treatment based on real-time user data, creating more responsive and effective digital interventions that can reach underserved populations.`,
    keyFindings: [
      'AI-assisted therapy chatbots demonstrate clinical effectiveness comparable to human therapists for mild to moderate depression.',
      'Virtual reality exposure therapy achieves 40% higher adherence rates than traditional exposure techniques for anxiety disorders.',
      'Digital interventions with gamification elements show 3x higher completion rates than standard digital programs.',
      'Smartphone-based mood tracking combined with machine learning can predict depressive episodes up to 2 weeks before clinical onset.'
    ],
    relatedTopics: ['telehealth-mental-health-services', 'social-media-and-mental-health', 'cognitive-behavioral-therapy']
  },
  'trauma-informed-care': {
    id: 'trauma-informed-care',
    title: 'Trauma-Informed Care',
    icon: Users,
    shortDescription: 'Developing comprehensive approaches to care that recognize the widespread impact of trauma.',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Trauma-informed care represents a fundamental shift in healthcare delivery, recognizing that traumatic experiences are pervasive and have profound impacts on physical and mental health. Our research focuses on developing and evaluating trauma-informed approaches across various healthcare settings, from primary care to specialized mental health services. By identifying the neural, psychological, and social mechanisms through which trauma impacts health, we're creating more effective screening tools, interventions, and organizational practices that promote healing and prevent retraumatization.`,
    keyFindings: [
      'Healthcare organizations implementing trauma-informed care protocols see 35% reductions in patient complaint rates and improved staff retention.',
      'Trauma screening in primary care settings increases identification of trauma-related conditions by 58% compared to standard practice.',
      'Trauma-specific memory reconsolidation therapies show 40% higher recovery rates than general trauma-focused treatments.',
      'Early childhood trauma-informed interventions demonstrate protective effects against later mental health disorders with a NNT (number needed to treat) of just 4.'
    ],
    relatedTopics: ['epigenetics-and-mental-health', 'group-therapy-innovations', 'psychedelic-assisted-therapy']
  },
  'nature-and-mental-health': {
    id: 'nature-and-mental-health',
    title: 'Nature and Mental Health',
    icon: Lightbulb,
    shortDescription: 'Studying the therapeutic effects of nature exposure on depression, anxiety, and overall psychological well-being.',
    imageSrc: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `The relationship between nature exposure and mental health represents an exciting frontier in preventative mental healthcare. Our research examines the neurological, psychological, and physiological effects of different types of nature interaction—from wilderness immersion to urban green spaces and virtual nature exposure. Through controlled trials and ecological momentary assessment studies, we're documenting how various "doses" of nature affect stress hormones, cognitive function, mood regulation, and overall psychological well-being across the lifespan.`,
    keyFindings: [
      'Just 20 minutes of nature exposure produces a significant drop in cortisol levels comparable to some anti-anxiety medications.',
      'Regular access to green spaces correlates with a 28% reduction in depression risk in longitudinal population studies.',
      'Nature-based therapy shows particular efficacy for attention restoration in ADHD and stress-related cognitive impairments.',
      'Hospital rooms with nature views result in 22% less pain medication use and faster recovery times compared to rooms without views.'
    ],
    relatedTopics: ['science-of-mindfulness', 'sleep-and-mental-health', 'social-media-and-mental-health']
  },
  'psychedelic-assisted-therapy': {
    id: 'psychedelic-assisted-therapy',
    title: 'Psychedelic-Assisted Therapy',
    icon: ChartLine,
    shortDescription: 'Examining the therapeutic potential of substances like psilocybin and MDMA for treatment-resistant mental health conditions.',
    imageSrc: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Psychedelic-assisted therapy represents one of the most promising frontiers in mental health treatment for conditions that have proven resistant to conventional approaches. Our research investigates the therapeutic mechanisms, safety profiles, and clinical outcomes of psilocybin, MDMA, and ketamine-assisted therapies for treatment-resistant depression, PTSD, and end-of-life anxiety. Through rigorous controlled trials and advanced neuroimaging studies, we're documenting how these substances can catalyze profound therapeutic breakthroughs when administered in carefully structured therapeutic contexts.`,
    keyFindings: [
      'Two psilocybin-assisted therapy sessions resulted in a 71% response rate for treatment-resistant depression, with effects lasting 6+ months.',
      'MDMA-assisted psychotherapy for PTSD shows 67% of participants no longer meeting diagnostic criteria after treatment, compared to 23% in the control group.',
      'Ketamine therapy combined with integration counseling demonstrates 3x the durability of ketamine infusion alone for depression remission.',
      'Neuroimaging reveals psychedelics create a temporary state of increased neural plasticity, potentially creating a "critical period" for therapeutic change.'
    ],
    relatedTopics: ['trauma-informed-care', 'neuroimaging-studies', 'epigenetics-and-mental-health']
  },
  'sleep-and-mental-health': {
    id: 'sleep-and-mental-health',
    title: 'Sleep and Mental Health',
    icon: Brain,
    shortDescription: 'Investigating the bidirectional relationship between sleep disorders and mental health conditions.',
    imageSrc: 'https://images.unsplash.com/photo-1517330112565-0b16ce3dd31d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Sleep disturbances represent both symptoms and potential causes of many psychiatric conditions, creating a complex bidirectional relationship critical to mental health. Our research maps the neurobiological pathways connecting sleep quality to emotional regulation, cognitive function, and stress response systems. Through both laboratory and real-world studies using advanced sleep monitoring technology, we're developing more precise interventions targeting the specific sleep mechanisms most relevant to different mental health conditions.`,
    keyFindings: [
      'REM sleep disruption specifically predicts emotional reactivity and stress sensitivity with 78% accuracy.',
      'Targeted sleep architecture improvements yield greater depression symptom reduction than many antidepressant medications.',
      'Specialized CBT for insomnia (CBT-I) reduces comorbid anxiety symptoms by 47%, even when anxiety wasn\'t directly treated.',
      'Circadian rhythm stabilization techniques show particular efficacy for bipolar disorder, reducing relapse rates by 65%.'
    ],
    relatedTopics: ['digital-therapeutics', 'science-of-mindfulness', 'nature-and-mental-health']
  },
  'social-media-and-mental-health': {
    id: 'social-media-and-mental-health',
    title: 'Social Media and Mental Health',
    icon: Cloud,
    shortDescription: 'Assessing the psychological impacts of social media use on adolescents and adults.',
    imageSrc: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `The proliferation of social media has fundamentally changed how we connect, communicate, and consume information, with profound implications for psychological well-being. Our research examines both the risks and potential benefits of social media use across age groups and contexts. Through longitudinal studies, experimental interventions, and qualitative analyses, we're identifying the specific patterns of social media engagement that either support or undermine mental health, with particular attention to adolescent development and vulnerable populations.`,
    keyFindings: [
      'Passive social media consumption correlates with 33% higher depression scores than active, connection-focused usage.',
      'Adolescents who take week-long social media breaks show significant improvements in sleep quality and self-reported life satisfaction.',
      'Content-specific exposure matters more than total screen time, with comparison-inducing content most strongly linked to negative outcomes.',
      'Structured social media literacy programs improve resistance to negative psychological effects by 41% in adolescents.'
    ],
    relatedTopics: ['digital-therapeutics', 'sleep-and-mental-health', 'nature-and-mental-health']
  },
  'epigenetics-and-mental-health': {
    id: 'epigenetics-and-mental-health',
    title: 'Epigenetics and Mental Health',
    icon: Microscope,
    shortDescription: 'Understanding how environmental factors influence gene expression and impact mental health across generations.',
    imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Epigenetic research has revolutionized our understanding of how environmental factors—from early life stress to nutrition and toxin exposure—can influence gene expression without altering DNA sequences. Our research investigates the epigenetic mechanisms underlying various psychiatric conditions and how these modifications can be transmitted across generations. Through advanced molecular analyses and longitudinal cohort studies, we're identifying epigenetic biomarkers that could predict vulnerability to specific mental health conditions and developing interventions that might positively influence epigenetic patterns.`,
    keyFindings: [
      'Childhood adversity creates distinctive epigenetic signatures that correlate with adult depression risk with 62% predictive accuracy.',
      'Specific DNA methylation patterns serve as reliable biomarkers for PTSD susceptibility and treatment response.',
      'Maternal stress during pregnancy influences offspring stress reactivity through epigenetic programming of HPA axis regulation.',
      'Certain therapeutic interventions, including mindfulness and exercise, demonstrate measurable epigenetic effects that correlate with symptom improvement.'
    ],
    relatedTopics: ['trauma-informed-care', 'neuroimaging-studies', 'psychedelic-assisted-therapy']
  },
  'group-therapy-innovations': {
    id: 'group-therapy-innovations',
    title: 'Group Therapy Innovations',
    icon: Users,
    shortDescription: 'New approaches to group therapy that enhance outcomes for various mental health conditions.',
    imageSrc: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Group therapy offers unique therapeutic mechanisms through interpersonal learning, universality, and collective hope that individual therapy cannot provide. Our research focuses on innovative group therapy modalities that leverage these mechanisms for maximum therapeutic impact. Through comparative effectiveness trials and process research, we're identifying the specific group therapy elements most critical for different conditions and developing specialized protocols for complex presentations like trauma, addiction, and personality disorders.`,
    keyFindings: [
      'Trauma-sensitive group protocols show 38% higher retention rates than traditional group therapy approaches for complex PTSD.',
      'Peer-facilitated groups demonstrate non-inferiority to professional-led groups for certain conditions, with additional benefits in stigma reduction.',
      'Virtual reality enhanced groups create accelerated cohesion and psychological safety compared to conventional in-person groups.',
      'Process-focused groups show superior outcomes to purely psychoeducational approaches for personality disorders and interpersonal difficulties.'
    ],
    relatedTopics: ['trauma-informed-care', 'telehealth-mental-health-services', 'digital-therapeutics']
  },
  'telehealth-mental-health-services': {
    id: 'telehealth-mental-health-services',
    title: 'Telehealth Mental Health Services',
    icon: Book,
    shortDescription: 'Evaluating the efficacy, accessibility, and future of remote mental health care delivery systems.',
    imageSrc: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    fullDescription: `Telehealth has transformed from a niche service to a mainstream mental healthcare delivery method, accelerated by global events and technological advances. Our research examines the effectiveness, engagement factors, and best practices for various telehealth modalities across different populations and conditions. Through comparative studies, implementation science, and patient-centered outcome research, we're identifying how to optimize telehealth services to maintain therapeutic alliance, ensure treatment fidelity, and expand access to quality mental healthcare for underserved communities.`,
    keyFindings: [
      'Video-based therapy shows equivalent outcomes to in-person therapy for most common mental health conditions, with higher attendance rates.',
      'Hybrid care models (combining in-person and telehealth) demonstrate superior outcomes to either modality alone for complex conditions.',
      'Telehealth significantly reduces treatment disparities for rural populations, reducing untreated mental illness by 28% in studied regions.',
      'Therapeutic alliance develops at comparable rates in telehealth and in-person therapy, contrary to earlier clinical concerns.'
    ],
    relatedTopics: ['digital-therapeutics', 'group-therapy-innovations', 'social-media-and-mental-health']
  }
};

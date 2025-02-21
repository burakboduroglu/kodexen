export const posts: Post[] = [
  {
    id: '1',
    content:
      "Just deployed my first machine learning model to production! Here's a quick example of how to load and predict with sklearn 🚀 #AI #MachineLearning",
    author: {
      id: 'u1',
      name: 'Sarah Chen',
      username: 'sarahcodes',
      avatar: '',
    },
    createdAt: new Date().toUTCString(),
    likes: 42,
    comments: 5,
    shares: 3,
    tags: ['AI', 'MachineLearning'],
    status: 'Yayında',
    codeSnippet: {
      language: 'python',
      code: `import joblib\n\n# Load the model\nmodel = joblib.load('model.pkl')\n\n# Make predictions\npredictions = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")`,
    },
  },
  {
    id: '2',
    content:
      'Check out this neat TypeScript utility type I made for handling async state! 💪 #TypeScript #WebDev',
    author: {
      id: 'u2',
      name: 'Alex Kumar',
      username: 'alexdev',
      avatar: '',
    },
    createdAt: new Date(Date.now() - 3600000).toUTCString(),
    likes: 28,
    comments: 12,
    shares: 4,
    tags: ['TypeScript', 'WebDev'],
    status: 'Yayında',
    codeSnippet: {
      language: 'typescript',
      code: `type AsyncState<T> = {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n}\n\ntype AsyncAction<T> =\n  | { type: 'pending' }\n  | { type: 'fulfilled'; data: T }\n  | { type: 'rejected'; error: Error };`,
    },
  },
  {
    id: '3',
    content:
      'Found this amazing article about WebAssembly and its impact on web performance. Must read! #WebDev #Performance',
    author: {
      id: 'u3',
      name: 'Maria Rodriguez',
      username: 'mariatech',
      avatar: '',
    },
    createdAt: new Date(Date.now() - 7200000).toUTCString(),
    likes: 15,
    comments: 3,
    shares: 7,
    tags: ['WebDev', 'Performance'],
    status: 'Yayında',
    linkPreview: {
      url: '',
      title: "WebAssembly Developer's Guide",
      image: '',
    },
  },
]

export const users: User[] = [
  {
    username: 'burakboduroglu',
    name: 'Burak Boduroğlu',
    avatar: '',
    coverImage: '/images/covers/default.jpg',
    bio: 'Full-stack developer passionate about React, TypeScript and Node.js. Building cool stuff @kodexen',
    location: 'Istanbul, Turkey',
    joinDate: 'Ocak 2024',
    followers: 1234,
    following: 567,
    socialLinks: {
      github: 'https://github.com/burakboduroglu',
      twitter: 'https://twitter.com/burakboduroglu',
      linkedin: 'https://linkedin.com/in/burakboduroglu',
      website: 'https://burakboduroglu.dev',
    },
  },
  {
    username: 'burakboduroglu',
    name: 'burakboduroglu',
    avatar: '',
    coverImage: '/images/covers/code.jpg',
    bio: 'DevOps Engineer | Cloud Architect | AWS Certified | Writing about cloud technologies and automation',
    location: 'Ankara, Turkey',
    joinDate: 'Şubat 2024',
    followers: 892,
    following: 345,
    socialLinks: {
      github: 'https://github.com/burakboduroglu',
      twitter: 'https://twitter.com/burakboduroglu',
      linkedin: 'https://linkedin.com/in/burakboduroglu',
      website: 'https://burakboduroglu.dev',
    },
  },
  {
    username: 'burakboduroglu',
    name: 'burakboduroglu',
    avatar: '',
    coverImage: '/images/covers/tech.jpg',
    bio: 'Open source contributor | JavaScript enthusiast | Building developer tools for better DX',
    location: 'İzmir, Turkey',
    joinDate: 'Mart 2024',
    followers: 2156,
    following: 789,
    socialLinks: {
      github: 'https://github.com/burakboduroglu',
      twitter: 'https://twitter.com/burakboduroglu',
      linkedin: 'https://linkedin.com/in/burakboduroglu',
      website: 'https://burakboduroglu.dev',
    },
  },
]

export const dummyTags = [
  { name: 'JavaScript', count: 1234 },
  { name: 'React', count: 890 },
  { name: 'TypeScript', count: 756 },
  { name: 'NextJS', count: 543 },
  { name: 'TailwindCSS', count: 432 },
]

export const suggestedUsers = [
  {
    id: 'u4',
    name: 'John Doe',
    username: 'johndoe',
    avatar: '',
    bio: 'Senior Frontend Developer',
  },
  {
    id: 'u5',
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: '',
    bio: 'Full Stack Developer',
  },
]


const data = {
  nodes: [
    {
      id: "0",
      label: "Introduction to Python",
      url:
        "https://www.imperial.ac.uk/study/pg/graduate-school/students/doctoral/professional-development/research-computing-data-science/courses/intro-to-python/",
      language: "python"
    },
    {
      id: "1",
      label: "Numerical Computing in Python\n with NumPy & SciPy",
      url: "test",
      languages: ["python"],
      topics: ["num"]
    },
    {
      id: "2",
      label: "Plotting in Python with Matplotlib",
      url: "test",
      languages: ["python"],
      topics: ["num", "dat", "viz"]
    },
    {
      id: "3",
      label: "Object-Oriented Python",
      url: "test",
      languages: ["python"],
      topics: []
    },
    {
      id: "4",
      label: "Data Processing with Python Pandas",
      url: "test",
      languages: ["python"],
      topics: ["dat"]
    },
    {
      id: "5",
      label: "Machine Learning with Python",
      url: "test",
      languages: ["python"],
      topics: ["ml"]
    },
    {
      id: "6",
      label: "Introduction to Machine Learning",
      url: "test",
      languages: [],
      topics: ["ml"]
    },
    {
      id: "7",
      label: "Profiling and Optimisation in Python",
      url: "test",
      languages: ["python"],
      topics: ["eng"]
    },
    {
      id: "8",
      label: "Unit Testing in Python",
      url: "test",
      languages: ["python"],
      topics: ["eng"]
    },
    {
      id: "9",
      label: "Deep Learning with Python",
      url: "test",
      languages: ["python"],
      topics: ["deep"]
    }
  ],
  edges: [
    {
      source: "0",
      target: "1",
      color: "black"
    },
    {
      source: "0",
      target: "2",
      color: "black"
    },
    {
      source: "0",
      target: "4",
      color: "black"
    },
    {
      source: "0",
      target: "3",
      color: "black"
    },
    {
      source: "3",
      target: "4",
      color: "lightgrey"
    },
    {
      source: "3",
      target: "2",
      color: "lightgrey"
    },
    {
      source: "0",
      target: "5",
      color: "black"
    },
    {
      source: "6",
      target: "5",
      color: "black"
    },
    {
      source: "4",
      target: "5",
      color: "lightgrey"
    },
    {
      source: "3",
      target: "8",
      color: "black"
    },
    {
      source: "0",
      target: "7",
      color: "black"
    },

    {
      source: "6",
      target: "9",
      color: "black"
    },
    {
      source: "1",
      target: "9",
      color: "black"
    }
  ]
};

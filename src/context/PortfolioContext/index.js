import React from 'react';

const PortfolioContext = React.createContext({
    projects: [
        {
            name: "Quiz Game",
            category: "Game",
            link: "https://quiz-game-smp.vercel.app",
            repo: "https://github.com/selva-mern12/quizGame",
            description: "An interactive quiz application for users to test their knowledge across diverse topics with real-time scoring.",
            tech: "React.js, JavaScript, CSS, MongoDB, Node, Express",
            features: [
                "Multiple choice questions",
                "Real-time scoring system",
                "Dynamic difficulty levels"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            smImage: require('../../assets/SmImages/quiz.jpg'),
            lgImage: require('../../assets/LgImages/quiz.png'),
        },
        {
            name: "Job Portal",
            category: "Web App",
            link: "https://job-portal-eta-five.vercel.app",
            repo: "https://github.com/selva-mern12/job_portal",
            description: "A comprehensive job search platform enabling users to browse listings, apply for positions, and manage applications.",
            tech: "React.js, JavaScript, CSS, Sqlite, Node, Express",
            features: [
                "Job listing & search",
                "Resume upload",
                "Employer dashboard"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            smImage: require('../../assets/SmImages/jobstation.jpg'),
            lgImage: require('../../assets/LgImages/jobstation.png'),
        },
        {
            name: "InvoGen",
            category: "Business Tool",
            link: "https://invogen-tau.vercel.app",
            repo: "https://github.com/selva-mern12/invogen",
            description: "A streamlined invoice generation tool designed for creating professional invoices with customizable options.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Custom invoice templates",
                "PDF export functionality",
                "Client management system"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            smImage: require('../../assets/SmImages/invogen.jpg'),
            lgImage: require('../../assets/LgImages/invogen.png'),
        },
        {
            name: "MeteoSyn",
            category: "Weather App",
            link: "https://meteosyn.netlify.app",
            repo: "https://github.com/selva-mern12/Meteosyn",
            description: "A weather forecasting application delivering real-time updates and detailed meteorological insights.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Real-time weather updates",
                "5-day forecast",
                "Location-based weather info"
            ],
            deployment: "Netlify",
            status: "Active",
            login: false,
            smImage: require('../../assets/SmImages/meteosyn.jpg'),
            lgImage: require('../../assets/LgImages/meteosyn.png'),
        },
        {
            name: "NxtTrends",
            category: "News & Insights",
            link: "https://s4nxttrends.ccbp.tech",
            repo: "https://github.com/selva-mern12/nxt-trendz",
            description: "A trend-tracking platform offering insights into the latest developments in technology and innovation.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Latest tech trends",
                "Category-based filtering",
                "User subscriptions"
            ],
            deployment: "CCBP",
            status: "Active",
            login: true,
            smImage: require('../../assets/SmImages/nxttrendz.jpg'),
            lgImage: require('../../assets/LgImages/nxttrendz.png'),
        },
        {
            name: "covid19Dash",
            category: "Dashboard",
            link: "https://covid19dashsrp.ccbp.tech",
            repo: "https://github.com/selva-mern12/covid19-dashboard",
            description: "A data-driven dashboard providing real-time statistics and visualizations of COVID-19 trends worldwide.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Live COVID-19 data",
                "Interactive charts",
                "Country-wise reports"
            ],
            deployment: "CCBP",
            status: "Active",
            login: false,
            smImage: require('../../assets/SmImages/covid19.jpg'),
            lgImage: require('../../assets/LgImages/covid19.png'),
        },
        {
            name: "NxtWatch",
            category: "Video Streaming",
            link: "https://nxtwatchsrp.ccbp.tech",
            repo: "https://github.com/selva-mern12/nxt_watch",
            description: "A YouTube clone with authentication and dark mode, offering seamless video streaming and user personalization.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "User authentication",
                "Dark mode support",
                "Video recommendations"
            ],
            deployment: "CCBP",
            status: "Active",
            login: true,
            smImage: require('../../assets/SmImages/nxtwatch.jpg'),
            lgImage: require('../../assets/LgImages/nxtwatch.png'),
        },
        {
            name: "Movies DB",
            category: "Entertainment",
            link: "https://movies--db.vercel.app/",
            repo: "https://github.com/selva-mern12/movies_db",
            description: "A web application that allows users to explore and search for movies, providing detailed information fetched from The Movie Database (TMDb) API.",
            tech: "React.js, JavaScript, CSS",
            features: [
              "Search functionality for movies",
              "Detailed movie information display",
              "Responsive design"
            ],
            deployment: "Vercel",
            status: "Active",
            login: false,
            smImage: require('../../assets/SmImages/moviedb.png'),
            lgImage: require('../../assets/LgImages/moviesdb.png'),
          }
          
          
    ]
});

export default PortfolioContext;

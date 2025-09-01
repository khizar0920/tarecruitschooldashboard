# Tarecruit - School Dashboard Redesign

A modern, responsive school dashboard built with Bootstrap 5 for managing teaching candidates and bookings efficiently.

## 🎯 Project Overview

The Tarecruit School Dashboard is designed to provide schools with a clean, modern, and user-friendly interface for viewing and managing teaching candidates. The redesign focuses on improving usability and creating a smooth experience for schools to quickly find, review, and book candidates.

## ✨ Key Features

### 1. **Clean and Modern Layout**
- Fresh, minimalistic design for better readability and user engagement
- Professional color scheme with smooth transitions and hover effects
- Responsive design optimized for all devices

### 2. **Candidate Display with Beautiful Cards**
- Visually appealing card layout showcasing each candidate
- Candidate information including:
  - Profile image and name
  - Position interested in
  - Location with map icon
  - Daily rate
  - Experience level
  - Action buttons for profile viewing, CV access, and booking

### 3. **Profile Completion Indicator**
- Circular progress bar on each candidate card
- Quick visual indication of profile completeness percentage
- Animated progress circles with smooth transitions

### 4. **Advanced Filters and Search**
- Real-time search functionality for candidates, emails, and references
- Filter by position (Math, Science, English, History, Art)
- Filter by location (London, Manchester, Birmingham, Leeds, Liverpool)
- Filter by availability (Immediate, 1-2 weeks, 1 month, 3 months)
- Easy filter clearing with one-click reset

### 5. **Interactive Dashboard Elements**
- Statistics cards showing key metrics
- Responsive grid layout for candidate cards
- Load more functionality for pagination
- Modal windows for detailed candidate profiles
- Smooth animations and hover effects

## 🚀 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables and animations
- **Bootstrap 5** - Responsive framework and components
- **Bootstrap Icons** - Professional icon set
- **Vanilla JavaScript** - Interactive functionality and data management
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
tarecruit-dashboard/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- Primary: Bootstrap Blue (#0d6efd)
- Success: Green (#198754)
- Warning: Yellow (#ffc107)
- Info: Cyan (#0dcaf0)
- Light backgrounds and subtle shadows

### Typography
- Modern font stack (Segoe UI, Tahoma, Geneva, Verdana, sans-serif)
- Clear hierarchy with proper font weights
- Readable text sizes for all screen sizes

### Components
- Custom candidate cards with gradient headers
- Interactive progress circles
- Hover effects and smooth transitions
- Responsive grid system
- Modern form controls and buttons

## 🔧 Installation & Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Quick Start
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The dashboard will load with sample data automatically

### Features to Try
- **Search**: Type in the search bar to filter candidates
- **Filters**: Use dropdown menus to filter by position, location, or availability
- **Candidate Cards**: Click on action buttons to interact with candidates
- **Profile View**: Click "View Profile" to see detailed candidate information
- **Responsive Design**: Resize your browser to see mobile/tablet layouts

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full feature set with multi-column layout
- **Tablet**: Adjusted spacing and single-column candidate cards
- **Mobile**: Stacked layout with optimized touch targets

## 🎭 Sample Data

The dashboard includes 8 sample candidates with realistic information:
- Various teaching positions (Math, Science, English, History, Art)
- Different locations across the UK
- Varied experience levels and qualifications
- Profile completion percentages
- Sample profile images (with fallback placeholders)

## 🔮 Future Enhancements

Potential improvements for production use:
- **Backend Integration**: Connect to real database and API
- **User Authentication**: Login system for schools
- **Real-time Updates**: Live candidate availability updates
- **Advanced Filtering**: Date range, salary range, and more filters
- **Export Functionality**: Download candidate lists and reports
- **Notification System**: Alerts for new candidates and bookings
- **Dark Mode**: Toggle between light and dark themes

## 🛠️ Customization

### Adding New Candidates
Edit the `loadSampleData()` function in `script.js` to add more candidates:

```javascript
{
    id: 9,
    name: "New Candidate",
    email: "new@email.com",
    reference: "REF-009",
    position: "Subject Teacher",
    location: "City",
    dailyRate: "£170",
    availability: "Immediate",
    profileCompletion: 90,
    avatar: "image-url",
    experience: "X years",
    qualifications: "Qualifications",
    rating: 4.8,
    reviews: 25
}
```

### Modifying Styles
- Edit CSS variables in `styles.css` for color scheme changes
- Modify card layouts and animations as needed
- Adjust responsive breakpoints for different screen sizes

### Adding New Filters
- Add new filter options to the HTML
- Update the `filterCandidates()` function in JavaScript
- Include new filter logic in the candidate filtering

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed for your projects.

## 🤝 Contributing

While this is a demonstration project, suggestions for improvements are welcome:
- Bug reports
- Feature requests
- Design improvements
- Performance optimizations

## 📞 Support

For questions or support regarding this dashboard:
- Review the code comments for implementation details
- Check browser console for any JavaScript errors
- Ensure all files are in the same directory
- Verify Bootstrap CDN links are accessible

---

**Built with ❤️ using Bootstrap 5 and modern web technologies**

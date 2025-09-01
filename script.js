// Tarecruit School Dashboard - Modern JavaScript Functionality

class TarecruitDashboard {
    constructor() {
        this.candidates = [];
        this.filteredCandidates = [];
        this.currentPage = 0;
        this.candidatesPerPage = 12;
        this.init();
    }

    init() {
        this.loadSampleData();
        this.setupEventListeners();
        this.renderCandidates();
        this.updateStats();
    }

    // Sample candidate data
    loadSampleData() {
        this.candidates = [
            {
                id: 1,
                name: "Mark Gilbert",
                email: "mark.gilbert@email.com",
                reference: "REF-001",
                position: "UI Designer",
                location: "London",
                skills: ["Figma", "Sketch"],
                projects: 18,
                progress: 80,
                rating: 4.5,
                profileCompletion: 95,
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                experience: "5 years",
                qualifications: "BSc Design, UI/UX Certification",
                dailyRate: "£180",
                availability: "Immediate"
            },
            {
                id: 2,
                name: "Eugenia Parsons",
                email: "eugenia.parsons@email.com",
                reference: "REF-002",
                position: "Full Stack Developer",
                location: "Manchester",
                skills: ["Angular", "React"],
                projects: 24,
                progress: 92,
                rating: 4.8,
                profileCompletion: 88,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                experience: "7 years",
                qualifications: "MSc Computer Science, Full Stack Certification",
                dailyRate: "£175",
                availability: "1-2 weeks"
            },
            {
                id: 3,
                name: "Francis Byrd",
                email: "francis.byrd@email.com",
                reference: "REF-003",
                position: "Frontend Developer",
                location: "Birmingham",
                skills: ["React", "HTML"],
                projects: 15,
                progress: 75,
                rating: 4.3,
                profileCompletion: 92,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                experience: "4 years",
                qualifications: "BA Computer Science, Frontend Certification",
                dailyRate: "£170",
                availability: "1 month"
            },
            {
                id: 4,
                name: "Sarah Johnson",
                email: "sarah.johnson@email.com",
                reference: "REF-004",
                position: "Math Teacher",
                location: "Leeds",
                skills: ["Algebra", "Calculus"],
                projects: 12,
                progress: 85,
                rating: 4.7,
                profileCompletion: 78,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                experience: "6 years",
                qualifications: "MA Mathematics, PGCE",
                dailyRate: "£165",
                availability: "Immediate"
            },
            {
                id: 5,
                name: "Michael Chen",
                email: "michael.chen@email.com",
                reference: "REF-005",
                position: "Science Teacher",
                skills: ["Chemistry", "Biology"],
                projects: 20,
                progress: 88,
                rating: 4.6,
                profileCompletion: 85,
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                experience: "3 years",
                qualifications: "BSc Chemistry, QTS",
                dailyRate: "£160",
                availability: "3 months"
            },
            {
                id: 6,
                name: "Emma Wilson",
                email: "emma.wilson@email.com",
                reference: "REF-006",
                position: "English Teacher",
                skills: ["Literature", "Grammar"],
                projects: 16,
                progress: 90,
                rating: 4.9,
                profileCompletion: 90,
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
                experience: "8 years",
                qualifications: "PhD English Literature, QTS",
                dailyRate: "£185",
                availability: "1-2 weeks"
            },
            {
                id: 7,
                name: "David Thompson",
                email: "david.thompson@email.com",
                reference: "REF-007",
                position: "History Teacher",
                skills: ["Modern History", "Geography"],
                projects: 14,
                progress: 82,
                rating: 4.4,
                profileCompletion: 87,
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
                experience: "5 years",
                qualifications: "MA History, PGCE",
                dailyRate: "£180",
                availability: "Immediate"
            },
            {
                id: 8,
                name: "Lisa Rodriguez",
                email: "lisa.rodriguez@email.com",
                reference: "REF-008",
                position: "Art Teacher",
                skills: ["Painting", "Digital Art"],
                projects: 22,
                progress: 95,
                rating: 4.8,
                profileCompletion: 93,
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                experience: "6 years",
                qualifications: "BFA Fine Arts, PGCE",
                dailyRate: "£175",
                availability: "1 month"
            }
        ];
        this.filteredCandidates = [...this.candidates];
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterCandidates();
        });

        // Filter dropdowns
        document.getElementById('positionFilter').addEventListener('change', () => {
            this.filterCandidates();
        });

        document.getElementById('locationFilter').addEventListener('change', () => {
            this.filterCandidates();
        });

        document.getElementById('availabilityFilter').addEventListener('change', () => {
            this.filterCandidates();
        });

        // Clear filters
        document.getElementById('clearFilters').addEventListener('click', () => {
            this.clearFilters();
        });

        // Load more button
        document.getElementById('loadMoreBtn').addEventListener('click', () => {
            this.loadMoreCandidates();
        });
    }

    filterCandidates() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const positionFilter = document.getElementById('positionFilter').value;
        const locationFilter = document.getElementById('locationFilter').value;
        const availabilityFilter = document.getElementById('availabilityFilter').value;

        this.filteredCandidates = this.candidates.filter(candidate => {
            const matchesSearch = 
                candidate.name.toLowerCase().includes(searchTerm) ||
                candidate.email.toLowerCase().includes(searchTerm) ||
                candidate.reference.toLowerCase().includes(searchTerm);
            
            const matchesPosition = !positionFilter || candidate.position === positionFilter;
            const matchesLocation = !locationFilter || candidate.location === locationFilter;
            const matchesAvailability = !availabilityFilter || candidate.availability === availabilityFilter;

            return matchesSearch && matchesPosition && matchesLocation && matchesAvailability;
        });

        this.currentPage = 0;
        this.renderCandidates();
        this.updateStats();
    }

    clearFilters() {
        document.getElementById('searchInput').value = '';
        document.getElementById('positionFilter').value = '';
        document.getElementById('locationFilter').value = '';
        document.getElementById('availabilityFilter').value = '';
        
        this.filteredCandidates = [...this.candidates];
        this.currentPage = 0;
        this.renderCandidates();
        this.updateStats();
    }

    renderCandidates() {
        const grid = document.getElementById('candidatesGrid');
        const startIndex = this.currentPage * this.candidatesPerPage;
        const endIndex = startIndex + this.candidatesPerPage;
        const candidatesToShow = this.filteredCandidates.slice(startIndex, endIndex);

        if (this.currentPage === 0) {
            grid.innerHTML = '';
        }

        candidatesToShow.forEach(candidate => {
            const candidateCard = this.createCandidateCard(candidate);
            grid.appendChild(candidateCard);
        });

        // Show/hide load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (endIndex >= this.filteredCandidates.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    createCandidateCard(candidate) {
        const col = document.createElement('div');
        col.className = 'col-xl-3 col-lg-4 col-md-6 mb-3';
        
        col.innerHTML = `
        <div class="candidate-card">
            <div class="candidate-header">
                <div class="profile-completion-badge">
                    <svg width="36" height="36">
                        <circle class="badge-bg" cx="18" cy="18" r="16"></circle>
                        <circle class="badge-progress" cx="18" cy="18" r="16" 
                                style="stroke-dasharray: ${(candidate.profileCompletion / 100) * 100.5} 100.5"></circle>
                    </svg>
                    <div class="badge-text">${candidate.profileCompletion}%</div>
                </div>
    
                <img src="${candidate.avatar}" alt="${candidate.name}" class="candidate-avatar"
                     onerror="this.src='https://via.placeholder.com/150/173663/ffffff?text=${candidate.name.charAt(0)}'">
    
                <div class="candidate-name">${candidate.name}</div>
            </div>
    
            <div class="candidate-body">
                <div class="candidate-info-grid">
                    <div class="candidate-info">
                        <span class="candidate-info-label">Position</span>
                        <span class="candidate-info-value">${candidate.position}</span>
                    </div>
                    <div class="candidate-info">
                        <span class="candidate-info-label">Location</span>
                        <span class="candidate-info-value">
                            <i class="bi bi-geo-alt me-1"></i>${candidate.location || 'London'}
                        </span>
                    </div>
                    <div class="candidate-info">
                        <span class="candidate-info-label">Experience</span>
                        <span class="candidate-info-value">${candidate.experience}</span>
                    </div>
                    <div class="candidate-info">
                        <span class="candidate-info-label">Daily Rate</span>
                        <span class="candidate-info-value">${candidate.dailyRate}</span>
                    </div>
                </div>
    
                <div class="candidate-actions">
                    <button class="btn btn-outline-primary btn-action" onclick="dashboard.viewProfile(${candidate.id})">
                        <i class="bi bi-person me-1"></i>Profile
                    </button>
                    <button class="btn btn-outline-success btn-action" onclick="dashboard.viewCV(${candidate.id})">
                        <i class="bi bi-file-earmark-text me-1"></i>View CV
                    </button>
                    <button class="btn btn-primary btn-action" onclick="dashboard.bookNow(${candidate.id})">
                        <i class="bi bi-calendar-plus me-1"></i>Book
                    </button>
                </div>
            </div>
        </div>
    `;
    
        
        return col;
    }

    loadMoreCandidates() {
        this.currentPage++;
        this.renderCandidates();
    }

    viewProfile(candidateId) {
        const candidate = this.candidates.find(c => c.id === candidateId);
        if (!candidate) return;

        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="${candidate.avatar}" alt="${candidate.name}" class="img-fluid rounded-circle mb-3" 
                         style="width: 120px; height: 120px; object-fit: cover; border: 4px solid #e2e8f0;"
                         onerror="this.src='https://via.placeholder.com/120/173663/ffffff?text=${candidate.name.charAt(0)}'">
                    <h5 class="mb-2 fw-bold">${candidate.name}</h5>
                    <p class="text-primary mb-3 fw-semibold">${candidate.position}</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" onclick="dashboard.bookNow(${candidate.id})">
                            <i class="bi bi-calendar-plus me-2"></i>Book Now
                        </button>
                    </div>
                </div>
                <div class="col-md-8">
                    <h6 class="text-primary mb-3 fw-semibold">
                        <i class="bi bi-person-lines-fill me-2"></i>Contact Information
                    </h6>
                    <div class="mb-3">
                        <strong>Email:</strong> ${candidate.email}<br>
                        <strong>Reference:</strong> ${candidate.reference}
                    </div>
                    
                    <h6 class="text-primary mb-3 fw-semibold">
                        <i class="bi bi-briefcase me-2"></i>Professional Details
                    </h6>
                    <div class="mb-3">
                        <strong>Experience:</strong> ${candidate.experience}<br>
                        <strong>Qualifications:</strong> ${candidate.qualifications}<br>
                        <strong>Daily Rate:</strong> ${candidate.dailyRate}<br>
                        <strong>Availability:</strong> ${candidate.availability}
                    </div>
                    
                    <h6 class="text-primary mb-3 fw-semibold">
                        <i class="bi bi-star me-2"></i>Profile & Ratings
                    </h6>
                    <div class="mb-3">
                        <strong>Profile Completion:</strong> ${candidate.profileCompletion}%<br>
                        <strong>Rating:</strong> ${candidate.rating}/5.0<br>
                        <strong>Projects:</strong> ${candidate.projects}<br>
                        <strong>Progress:</strong> ${candidate.progress}%
                    </div>
                    
                    <h6 class="text-primary mb-3 fw-semibold">
                        <i class="bi bi-tags me-2"></i>Skills
                    </h6>
                    <div class="mb-3">
                        ${candidate.skills.map(skill => 
                            `<span class="badge bg-primary me-1">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        const modal = new bootstrap.Modal(document.getElementById('candidateModal'));
        modal.show();
    }

    viewCV(candidateId) {
        const candidate = this.candidates.find(c => c.id === candidateId);
        if (!candidate) return;

        // Simulate CV viewing - in a real app, this would open a PDF or document
        alert(`Opening CV for ${candidate.name}...\n\nIn a real application, this would display or download the candidate's CV.`);
    }

    bookNow(candidateId) {
        const candidate = this.candidates.find(c => c.id === candidateId);
        if (!candidate) return;

        // Simulate booking process
        alert(`Booking ${candidate.name} for ${candidate.position}...\n\nIn a real application, this would open a booking form with date selection and confirmation.`);
    }

    viewCV(candidateId) {
        const candidate = this.candidates.find(c => c.id === candidateId);
        if (!candidate) return;

        // Simulate CV viewing - in a real app, this would open a PDF or document
        alert(`Opening CV for ${candidate.name}...\n\nIn a real application, this would display or download the candidate's CV.`);
    }

    updateStats() {
        // Update stats based on filtered results
        const totalCandidates = document.querySelector('.stat-card:nth-child(1) .stat-number');
        if (totalCandidates) {
            totalCandidates.textContent = this.filteredCandidates.length;
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new TarecruitDashboard();
});

// Add interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('btn-action')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add tooltip functionality
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add notification badge animation
    const notificationBadge = document.querySelector('.badge');
    if (notificationBadge) {
        notificationBadge.style.animation = 'pulse 2s infinite';
    }
});

// Add CSS animation for notification badge
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

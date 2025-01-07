const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})



function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slides container
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


  // Fungsi untuk mencari sertifikat berdasarkan input
  function searchCertificates() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const title = slide.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            slide.style.display = ''; // Tampilkan slide yang cocok
        } else {
            slide.style.display = 'none'; // Sembunyikan slide yang tidak cocok
        }
    });
  }

  // Fungsi untuk mengatur pergerakan slide
  function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const allSlides = document.querySelectorAll('.slide');
    let currentSlideIndex = Array.from(allSlides).findIndex(slide => slide.style.display !== 'none');
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = allSlides.length - 1;
    } else if (currentSlideIndex >= allSlides.length) {
        currentSlideIndex = 0;
    }

    // Menampilkan slide sesuai indeks
    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = (i === currentSlideIndex) ? '' : 'none';
    }
  }


  function searchProjects() {
    const query = document.getElementById('search').value.toLowerCase();
    const projects = document.querySelectorAll('.details-container');
  
    projects.forEach(project => {
      const title = project.querySelector('.project-title').textContent.toLowerCase();
      if (title.includes(query)) {
        project.classList.add('highlight'); // Menambahkan kelas highlight pada proyek yang ditemukan
      } else {
        project.classList.remove('highlight'); // Menghapus highlight jika tidak ditemukan
      }
    });
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });
  
    // Trigger initial display
    document.querySelector('.filter-btn[data-filter="all"]').click();
  });
  
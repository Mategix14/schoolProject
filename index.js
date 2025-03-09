document.addEventListener("DOMContentLoaded", () => {
  let curPage = 1;
  const pages = document.querySelectorAll(".skw-page");
  const numOfPages = pages.length;
  const animTime = 1000;
  let scrolling = false;

  const updatePagination = () => {
    scrolling = true;

    pages.forEach((page, index) => {
      if (index + 1 === curPage) {
        page.classList.remove("inactive");
        page.classList.add("active");
      } else if (index + 1 === curPage - 1) {
        page.classList.add("inactive");
      } else if (index + 1 === curPage + 1) {
        page.classList.remove("active");
      }
    });

    setTimeout(() => {
      scrolling = false;
    }, animTime);
  };

  const navigateUp = () => {
    if (curPage > 1) {
      curPage--;
      updatePagination();
    }
  };

  const navigateDown = () => {
    if (curPage < numOfPages) {
      curPage++;
      updatePagination();
    }
  };

  const handleScroll = (e) => {
    if (scrolling) return;
    if (e.deltaY < 0) {
      navigateUp();
    } else if (e.deltaY > 0) {
      navigateDown();
    }
  };

  const handleKeyDown = (e) => {
    if (scrolling) return;
    if (e.key === "ArrowUp") {
      navigateUp();
    } else if (e.key === "ArrowDown") {
      navigateDown();
    }
  };

  window.addEventListener("wheel", handleScroll);
  window.addEventListener("keydown", handleKeyDown);
});

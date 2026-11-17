// 株洲伟达教育科技有限公司 — 全站交互
document.addEventListener('DOMContentLoaded', function () {
  // 滚动时导航背景变化
  var header = document.querySelector('.site-header');
  var solidPages = document.body.dataset.hero === 'page';
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40 || solidPages) header.classList.add('is-solid');
    else header.classList.remove('is-solid');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // 移动端菜单
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 院校筛选
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var btns = group.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll(group.dataset.filterTarget);
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var val = btn.dataset.filter;
        items.forEach(function (item) {
          if (val === 'all' || item.dataset.cat === val) item.style.display = '';
          else item.style.display = 'none';
        });
      });
    });
  });

  // 年份自动填充
  var y = document.getElementById('footer-year');
  if (y) y.textContent = new Date().getFullYear();
});

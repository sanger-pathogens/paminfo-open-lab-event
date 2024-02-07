<header>
  <h1>
    <a href="/">
      <img
        class="pam_logo"
        src="/imgs/paminfo.png"
        alt="PaM Informatics"
        title="PaM Informatics - FE test"
      />
    </a>
  </h1>
  <nav />
</header>

<style>
  header {
    background: var(--color-purple);
    padding: 0rem 1rem;
    overflow-y: auto;
    position: relative;
    max-width: 100%;
  }

  h1 {
    margin-top: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    min-height: 6rem;
    max-width: var(--breakpoint-xl);
  }

  .pam_logo {
    max-width: 15rem;
    margin-top: 1.9rem;
  }
</style>

<footer>
  <div class="max-inner-width" />

  <a
    href="https://www.sanger.ac.uk/"
    target="_blank"
    rel="noreferrer"
    class="sanger-link"
  >
    <img
      alt="Wellcome Sanger Institute"
      src="/imgs/sangerlogowhite.svg"
      title="Wellcome Sanger Institute"
    />
  </a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-around;
    background: var(--color-purple);
    color: white;
    margin-top: auto;
    padding: 1.4rem 1.4rem 1.8rem;
  }

  .max-inner-width {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    max-width: var(--breakpoint-xl);
    width: 100%;
  }

  a {
    color: white;
  }

  .sanger-link {
    order: -1;
    margin-right: auto;
    padding-right: 0.6rem;
  }
  .sanger-link img {
    width: 7.3rem;
  }
</style>

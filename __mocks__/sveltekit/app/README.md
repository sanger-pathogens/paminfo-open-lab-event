# About this directory

This directory was created to make Jest import SvelteKit's `$app` modules. (Nil wasn't able to make Jest import the real modules.)

If Jest fails becuase it cannot import some `$app` module, just create a corresponding file in this directory w/ exported stubs/mocks.

TODO: consider migrating to Vitest from Jest.

// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

//Na produção, registramos um service worker para servir ativos do cache local.

// Isso permite que o aplicativo carregue mais rápido nas visitas subsequentes na produção e dá
// possui recursos off-line. No entanto, também significa que os desenvolvedores (e usuários)
// só verá atualizações implantadas na visita "N + 1" a uma página, desde que anteriormente
// recursos em cache são atualizados em segundo plano.

// Para saber mais sobre os benefícios deste modelo, leia https://goo.gl/KwvDNy.
// Este link também inclui instruções sobre como desativar esse comportament

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export default function register () {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        // O construtor de URL está disponível em todos os navegadores que suportam SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374

      // Nosso service worker não funcionará se PUBLIC_URL estiver em uma origem diferente
      // de onde nossa página é veiculada. Isso pode acontecer se um CDN for usado para
      // servir ativos; consulte https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        // Isso está sendo executado em localhost. Vamos verificar se um service worker ainda existe ou não.
        checkValidServiceWorker(swUrl);
      } else {
        // Is not local host. Just register service worker
        // Não é um host local. Basta registrar o prestador de serviço
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW (swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.

              // Neste ponto, o conteúdo antigo terá sido removido e
              // o novo conteúdo será adicionado ao cache.
              // É o momento perfeito para exibir um "Novo conteúdo é
              // acessível; atualize. "mensagem em seu aplicativo da web.
              console.log('New content is available; please refresh.');
            } else {

              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.

              // Neste ponto, tudo foi pré-armazenado.
              // É o momento perfeito para exibir um
              // "O conteúdo é armazenado em cache para uso offline." mensagem.

              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker (swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  // Verifique se o service worker pode ser encontrado. Se não for possível recarregar a página.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      // Certifique-se de que o service worker exista e de que realmente estamos obtendo um arquivo JS.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        // Nenhum trabalhador de serviço encontrado. Provavelmente um aplicativo diferente. Recarregue a página.

        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        // Service worker encontrado. Prossiga normalmente.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

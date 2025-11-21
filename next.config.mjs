/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Gera HTML estático na pasta 'out'
  images: {
    unoptimized: true, // <--- Desliga otimização de imagem (Server-Side) que não funciona no GH Pages
  },
  // O basePath é opcional, mas se as rotas quebrarem, pode ser necessário descomentar:
  // basePath: '/jhvlima.github.io', 
};

export default nextConfig;
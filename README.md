# TPI Multirepo · Usuarios

Aplicación Angular normal e independiente del equipo Usuarios. Su producción se despliega como un contenedor separado.

## Desarrollo local

```bash
npm install
npm start
```

## Docker

La imagen compila la app con `base-href=/usuarios/` para que funcione detrás del Gateway:

```bash
docker build -t tpi-multirepo-usuarios .
```

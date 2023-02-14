# PrismaMemoryLeak


```bash
npm ci

docker-compose up -d

prisma migrate dev
prisma generate

# Run test without prisma -> no leak
npm run test:proof

# Run test with prisma -> memory leak
npm run test:leak
```

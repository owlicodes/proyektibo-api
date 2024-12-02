import { Module } from "@nestjs/common";

import { OrganizationsModule } from "../organizations/organizations.module";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectsController } from "./projects.controller";
import { ProjectsRepository } from "./projects.repository";
import { ProjectsService } from "./projects.service";

@Module({
  imports: [OrganizationsModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository, PrismaService],
})
export class ProjectsModule {}
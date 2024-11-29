import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";

import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { TUser } from "../types";
import { CreateOrganizationDto } from "./dtos/create-organization.dto";
import { UpdateOrganizationDto } from "./dtos/update-organization.dto";
import { OrganizationsService } from "./organizations.service";

@Controller({
  path: "organizations",
  version: "1",
})
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  createOrganization(@Body() data: CreateOrganizationDto) {
    return this.organizationsService.createOrganization(data);
  }

  @Get()
  findOrganizations(@Request() req: { user: TUser }) {
    return this.organizationsService.findOrganizations(req.user.id);
  }

  @Patch(":organizationId")
  updateOrganization(
    @Param("organizationId") organizationId: string,
    @Body() data: UpdateOrganizationDto
  ) {
    return this.organizationsService.updateOrganization(organizationId, data);
  }
}

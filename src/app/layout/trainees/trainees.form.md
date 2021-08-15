{% comment %} <div class="container">
<form action="" method="post" [formGroup]="service.form" class="trainees-form">
  <mat-grid-list cols="2">
    <mat-grid-tile>
      <div class="control-container">
        <input type="hidden" formControlName="$key" />
        <mat-form-field>
          <input
            matInput
            type="text"
            formControlName="firstName"
            placeholder="First Name"
          />
          <mat-error>This field is required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="text"
            formControlName="lastName"
            placeholder="Last Name"
          />
          <mat-error>This field is required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="email"
            formControlName="email"
            placeholder="Email"
          />
          <mat-error>This field is required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            type="password"
            formControlName="password"
            placeholder="Password"
          />
          <mat-error>This field is required</mat-error>
        </mat-form-field>
      </div>
    </mat-grid-tile>
    <mat-grid-tile>
      <div class="control-container">
        <div class="add-bottom-padding">
          <mat-radio-group formControlName="gender">
            <mat-radio-button value="1">Male</mat-radio-button>
            <mat-radio-button value="2">Female</mat-radio-button>
          </mat-radio-group>
        </div>
        <mat-error>This field is required</mat-error>
        <mat-form-field>
          <mat-select formControlName="skills" placeholder="skills">
            <mat-option>None</mat-option>
            <ng-container *ngFor="let skill of skills">
              <mat-option value="{{ skill.id }}">{{ skill.value }}</mat-option>
            </ng-container>
          </mat-select>
        </mat-form-field>
        <div class="add-bottom-padding">
          <mat-checkbox formControlName="certifications"
            >Certifications</mat-checkbox
          >
        </div>
        <mat-form-field>
          <input matInput formControlName="education" placeholder="education" />
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            formControlName="startDate"
            [matDatepicker]="picker"
            placeholder="start date"
          />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <div class="button-row">
          <button mat-raised-button color="primary" type="submit">save</button>
          <button mat-raised-button color='warn' type="button" (click)="onClear()">
            clear
          </button>
        </div>
      </div>
    </mat-grid-tile>
  </mat-grid-list>
</form>
</div> {% endcomment %}
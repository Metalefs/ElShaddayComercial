import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { FeedbackService } from 'src/app/data/service/domain/FeedbackService';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedback:Collections.Feedback;
  constructor(private AuthenticationService:AuthenticationService,
    private FeedbackService:FeedbackService
    ) { 
    this.Feedback = new Collections.Feedback("","",null,"","");
    this.AuthenticationService.currentUser.subscribe(x => this.Feedback.Cliente = x);
  }

  SendFeedback(){
    this.FeedbackService.Incluir(this.Feedback);
  }

  ngOnInit(): void {
  }

}

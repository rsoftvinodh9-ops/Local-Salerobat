# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Profile-userview.spec.ts >> Profile-userview Test
- Location: tests\Profile-userview.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listitem').filter({ hasText: 'rsoft My Profile line_style' }).getByRole('link')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e5]:
      - list [ref=e6]:
        - listitem [ref=e7]:
          - generic [ref=e9]: list
          - list:
            - listitem:
              - heading "anchor Marketing" [level=6]:
                - generic: anchor
                - generic: Marketing
              - list:
                - listitem:
                  - link "Whatshot Campaigns":
                    - /url: https://rdot.in/public/admin/?Module=Campaigns&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: Campaigns
                - listitem:
                  - link "Mark_Unread_Chat_alt SMS Notifiers":
                    - /url: https://rdot.in/public/admin/?Module=Sms_notifiers&view=AdvancedListView&viewname=
                    - generic: Mark_Unread_Chat_alt
                    - generic: SMS Notifiers
                - listitem:
                  - link "Mail Emails":
                    - /url: https://rdot.in/public/admin/?Module=Emails&view=Email
                    - generic: Mail
                    - generic: Emails
                - listitem:
                  - link "Rate_Review Chats":
                    - /url: https://rdot.in/public/admin/?Module=Chats&view=Chat&chats_to=
                    - generic: Rate_Review
                    - generic: Chats
            - listitem:
              - heading "shopping_cart_checkout Sales" [level=6]:
                - generic: shopping_cart_checkout
                - generic: Sales
              - list:
                - listitem:
                  - link "Call Calls":
                    - /url: https://rdot.in/public/admin/?Module=Calls&view=AdvancedListView&viewname=
                    - generic: Call
                    - generic: Calls
                - listitem:
                  - link "Contact_Mail Leads":
                    - /url: https://rdot.in/public/admin/?Module=Leads&view=AdvancedListView&viewname=
                    - generic: Contact_Mail
                    - generic: Leads
                - listitem:
                  - link "Assignment Quotes":
                    - /url: https://rdot.in/public/admin/?Module=Quotes&view=AdvancedListView&viewname=
                    - generic: Assignment
                    - generic: Quotes
            - listitem:
              - heading "account_balance Accounts" [level=6]:
                - generic: account_balance
                - generic: Accounts
              - list:
                - listitem:
                  - link "card_membership Invoices":
                    - /url: https://rdot.in/public/admin/?Module=Invoices&view=AdvancedListView&viewname=
                    - generic: card_membership
                    - generic: Invoices
                - listitem:
                  - link "Currency_Rupee Payments":
                    - /url: https://rdot.in/public/admin/?Module=Payments&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Payments
                - listitem:
                  - link "handshake Appointments":
                    - /url: https://rdot.in/public/admin/?Module=Appointments&view=AdvancedListView&viewname=
                    - generic: handshake
                    - generic: Appointments
            - listitem:
              - heading "card_membership Inventory" [level=6]:
                - generic: card_membership
                - generic: Inventory
              - list:
                - listitem:
                  - link "inventory_2 Products":
                    - /url: https://rdot.in/public/admin/?Module=Products&view=AdvancedListView&viewname=
                    - generic: inventory_2
                    - generic: Products
            - listitem:
              - heading "monitoring Analytics" [level=6]:
                - generic: monitoring
                - generic: Analytics
              - list:
                - listitem:
                  - link "Update Updates":
                    - /url: https://rdot.in/public/admin/?Module=Updates&view=List&viewname=
                    - generic: Update
                    - generic: Updates
                - listitem:
                  - link "bar_chart Reports":
                    - /url: https://rdot.in/public/admin/?Module=Reports&view=AdvancedListView&viewname=
                    - generic: bar_chart
                    - generic: Reports
                - listitem:
                  - link "bar_chart Advanced Report":
                    - /url: https://rdot.in/public/admin/?Module=Advanced_report&view=AdvancedReport&tabmode=All Reports
                    - generic: bar_chart
                    - generic: Advanced Report
            - listitem:
              - heading "arrows_more_up Others" [level=6]:
                - generic: arrows_more_up
                - generic: Others
              - list:
                - listitem:
                  - link "Whatshot Module B":
                    - /url: https://rdot.in/public/admin/?Module=Module_b&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: Module B
                - listitem:
                  - link "Schedule C":
                    - /url: https://rdot.in/public/admin/?Module=C&view=AdvancedListView&viewname=
                    - generic: Schedule
                    - generic: C
                - listitem:
                  - link "Drafts Employee":
                    - /url: https://rdot.in/public/admin/?Module=Employee&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Employee
                - listitem:
                  - link "Currency_Rupee Module one":
                    - /url: https://rdot.in/public/admin/?Module=Module_one&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Module one
                - listitem:
                  - link "Whatshot DID Mapping":
                    - /url: https://rdot.in/public/admin/?Module=Did_mapping&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: DID Mapping
                - listitem:
                  - link "rocket_launch Subash test":
                    - /url: https://rdot.in/public/admin/?Module=Subash_test&view=AdvancedListView&viewname=
                    - generic: rocket_launch
                    - generic: Subash test
                - listitem:
                  - link "Currency_Rupee Inven":
                    - /url: https://rdot.in/public/admin/?Module=Inven&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Inven
                - listitem:
                  - link "Drafts Related New":
                    - /url: https://rdot.in/public/admin/?Module=Related_new&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Related New
                - listitem:
                  - link "Schedule New related New related New related New related N":
                    - /url: https://rdot.in/public/admin/?Module=New_related&view=AdvancedListView&viewname=
                    - generic: Schedule
                    - generic: New related New related New related New related N
                - listitem:
                  - link "Drafts Employee information":
                    - /url: https://rdot.in/public/admin/?Module=Employee_information&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Employee information
                - listitem:
                  - link "Currency_Rupee Test Inventory":
                    - /url: https://rdot.in/public/admin/?Module=Test_inventory&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Test Inventory
                - listitem:
                  - link "Notifications Gopi":
                    - /url: https://rdot.in/public/admin/?Module=Gopi&view=AdvancedListView&viewname=
                    - generic: Notifications
                    - generic: Gopi
                - listitem:
                  - link "Public Test":
                    - /url: https://rdot.in/public/admin/?Module=Test&view=AdvancedListView&viewname=
                    - generic: Public
                    - generic: Test
                - listitem:
                  - link "Update A":
                    - /url: https://rdot.in/public/admin/?Module=A&view=AdvancedListView&viewname=
                    - generic: Update
                    - generic: A
                - listitem:
                  - link "Shopping_Bag basic module":
                    - /url: https://rdot.in/public/admin/?Module=Inventory_module&view=AdvancedListView&viewname=
                    - generic: Shopping_Bag
                    - generic: basic module
                - listitem:
                  - link "Currency_Rupee Quick lead":
                    - /url: https://rdot.in/public/admin/?Module=Quick_lead&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Quick lead
                - listitem:
                  - link "bar_chart Import Test":
                    - /url: https://rdot.in/public/admin/?Module=Import_test&view=AdvancedListView&viewname=
                    - generic: bar_chart
                    - generic: Import Test
                - listitem:
                  - link "Notifications New Module Related":
                    - /url: https://rdot.in/public/admin/?Module=New_module_related&view=AdvancedListView&viewname=
                    - generic: Notifications
                    - generic: New Module Related
                - listitem:
                  - link "Currency_Rupee One":
                    - /url: https://rdot.in/public/admin/?Module=One&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: One
                - listitem:
                  - link "Call Call Log":
                    - /url: https://rdot.in/public/admin/?Module=Call_log&view=AdvancedListView&viewname=
                    - generic: Call
                    - generic: Call Log
                - listitem:
                  - link "Notifications Ansar":
                    - /url: https://rdot.in/public/admin/?Module=Ansar&view=AdvancedListView&viewname=
                    - generic: Notifications
                    - generic: Ansar
                - listitem:
                  - link "Currency_Rupee One inventory":
                    - /url: https://rdot.in/public/admin/?Module=One_inventory&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: One inventory
                - listitem:
                  - link "Notifications B":
                    - /url: https://rdot.in/public/admin/?Module=B&view=AdvancedListView&viewname=
                    - generic: Notifications
                    - generic: B
                - listitem:
                  - link "Call_Merge Field module":
                    - /url: https://rdot.in/public/admin/?Module=Field_module&view=AdvancedListView&viewname=
                    - generic: Call_Merge
                    - generic: Field module
                - listitem:
                  - link "Drafts Cxfdfef":
                    - /url: https://rdot.in/public/admin/?Module=Cxfdfef&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Cxfdfef
                - listitem:
                  - link "Language Test Field":
                    - /url: https://rdot.in/public/admin/?Module=Test_field&view=AdvancedListView&viewname=
                    - generic: Language
                    - generic: Test Field
                - listitem:
                  - link "Contact_Mail Vhkgvug":
                    - /url: https://rdot.in/public/admin/?Module=Vhkgvug&view=AdvancedListView&viewname=
                    - generic: Contact_Mail
                    - generic: Vhkgvug
                - listitem:
                  - link "Drafts Mistake":
                    - /url: https://rdot.in/public/admin/?Module=Mistake&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Mistake
                - listitem:
                  - link "card_membership Mobile Testing":
                    - /url: https://rdot.in/public/admin/?Module=Android_test&view=AdvancedListView&viewname=
                    - generic: card_membership
                    - generic: Mobile Testing
                - listitem:
                  - link "Drafts Group inve":
                    - /url: https://rdot.in/public/admin/?Module=Group_inve&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Group inve
                - listitem:
                  - link "Flash_On New check mod":
                    - /url: https://rdot.in/public/admin/?Module=New_check_mod&view=AdvancedListView&viewname=
                    - generic: Flash_On
                    - generic: New check mod
                - listitem:
                  - link "rocket_launch Demo Lead":
                    - /url: https://rdot.in/public/admin/?Module=Demo_lead&view=AdvancedListView&viewname=
                    - generic: rocket_launch
                    - generic: Demo Lead
                - listitem:
                  - link "phone_forwarded Demo Enquiry":
                    - /url: https://rdot.in/public/admin/?Module=Demo_enquiry&view=AdvancedListView&viewname=
                    - generic: phone_forwarded
                    - generic: Demo Enquiry
                - listitem:
                  - link "Whatshot SampleModule":
                    - /url: https://rdot.in/public/admin/?Module=Samplemodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: SampleModule
                - listitem:
                  - link "Whatshot SourceModule":
                    - /url: https://rdot.in/public/admin/?Module=Sourcemodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: SourceModule
                - listitem:
                  - link "Whatshot TargetModule":
                    - /url: https://rdot.in/public/admin/?Module=Targetmodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: TargetModule
                - listitem:
                  - link "Whatshot FromModule":
                    - /url: https://rdot.in/public/admin/?Module=Frommodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: FromModule
                - listitem:
                  - link "Whatshot FromSubModule":
                    - /url: https://rdot.in/public/admin/?Module=Fromsubmodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: FromSubModule
                - listitem:
                  - link "Whatshot SubModuleTwo":
                    - /url: https://rdot.in/public/admin/?Module=Submoduletwo&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: SubModuleTwo
                - listitem:
                  - link "Mail MODULE A":
                    - /url: https://rdot.in/public/admin/?Module=Module_a&view=AdvancedListView&viewname=
                    - generic: Mail
                    - generic: MODULE A
                - listitem:
                  - link "Assignment Comment":
                    - /url: https://rdot.in/public/admin/?Module=Comment&view=AdvancedListView&viewname=
                    - generic: Assignment
                    - generic: Comment
                - listitem:
                  - link "Shopping_Bag Naveen Test Module":
                    - /url: https://rdot.in/public/admin/?Module=Naveen_test_module&view=AdvancedListView&viewname=
                    - generic: Shopping_Bag
                    - generic: Naveen Test Module
                - listitem:
                  - link "Currency_Rupee New moduleone":
                    - /url: https://rdot.in/public/admin/?Module=New_module&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: New moduleone
                - listitem:
                  - link "Schedule Sample Module":
                    - /url: https://rdot.in/public/admin/?Module=Sample_module&view=AdvancedListView&viewname=
                    - generic: Schedule
                    - generic: Sample Module
                - listitem:
                  - link "Whatshot PickListModule":
                    - /url: https://rdot.in/public/admin/?Module=Picklistmodule&view=AdvancedListView&viewname=
                    - generic: Whatshot
                    - generic: PickListModule
                - listitem:
                  - link "Contact_Mail Whatsapp Template":
                    - /url: https://rdot.in/public/admin/?Module=Whatsapp_template&view=AdvancedListView&viewname=
                    - generic: Contact_Mail
                    - generic: Whatsapp Template
                - listitem:
                  - link "tools_wrench Inventary module":
                    - /url: https://rdot.in/public/admin/?Module=Inventary_module&view=AdvancedListView&viewname=
                    - generic: tools_wrench
                    - generic: Inventary module
                - listitem:
                  - link "Call Table":
                    - /url: https://rdot.in/public/admin/?Module=Table&view=AdvancedListView&viewname=
                    - generic: Call
                    - generic: Table
                - listitem:
                  - link "grid_view All UI Module":
                    - /url: https://rdot.in/public/admin/?Module=All_ui_module&view=AdvancedListView&viewname=
                    - generic: grid_view
                    - generic: All UI Module
                - listitem:
                  - link "Folder File":
                    - /url: https://rdot.in/public/admin/?Module=File&view=AdvancedListView&viewname=
                    - generic: Folder
                    - generic: File
                - listitem:
                  - link "Schedule Attendances":
                    - /url: https://rdot.in/public/admin/?Module=Attendances&view=AdvancedListView&viewname=
                    - generic: Schedule
                    - generic: Attendances
                - listitem:
                  - link "Notifications Notifications":
                    - /url: https://rdot.in/public/admin/?Module=Notifications&view=AdvancedListView&viewname=
                    - generic: Notifications
                    - generic: Notifications
            - listitem:
              - heading "tools_wrench Tools" [level=6]:
                - generic: tools_wrench
                - generic: Tools
              - list:
                - listitem:
                  - link "Picture_as_Pdf PDF Makers":
                    - /url: https://rdot.in/public/admin/?Module=Pdf_makers&view=AdvancedListView&viewname=
                    - generic: Picture_as_Pdf
                    - generic: PDF Makers
                - listitem:
                  - link "Drafts Email Templates":
                    - /url: https://rdot.in/public/admin/?Module=Email_Templates&view=AdvancedListView&viewname=
                    - generic: Drafts
                    - generic: Email Templates
                - listitem:
                  - link "SMS SMS Templates":
                    - /url: https://rdot.in/public/admin/?Module=SMS_Templates&view=AdvancedListView&viewname=
                    - generic: SMS
                    - generic: SMS Templates
                - listitem:
                  - link "Folder Documents":
                    - /url: https://rdot.in/public/admin/?Module=Documents&view=AdvancedListView&viewname=
                    - generic: Folder
                    - generic: Documents
                - listitem:
                  - link "calendar_month Calendars":
                    - /url: https://rdot.in/public/admin/?Module=Calendars&view=Calendars&viewname=
                    - generic: calendar_month
                    - generic: Calendars
                - link:
                  - /url: https://rdot.in/public/admin/?Module=Calendars&view=Calendars&viewname=
                - listitem:
                  - link:
                    - /url: https://rdot.in/public/admin/?Module=Calendars&view=Calendars&viewname=
                  - link "Mark_Email_Unread Mail Manager":
                    - /url: https://rdot.in/public/admin/?Module=Mailmanagers&view=AdvancedListView&viewname=
                    - generic: Mark_Email_Unread
                    - generic: Mail Manager
                - listitem:
                  - link "Recycling Recycle Bin":
                    - /url: https://rdot.in/public/admin/?Module=RecycleBin&view=List&viewname=
                    - generic: Recycling
                    - generic: Recycle Bin
            - listitem:
              - heading "Currency_Rupee Short URL" [level=6]:
                - generic: Currency_Rupee
                - generic: Short URL
              - list:
                - listitem:
                  - link "Currency_Rupee Short URL report":
                    - /url: https://rdot.in/public/admin/?Module=Short_url_report&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Short URL report
                - listitem:
                  - link "Currency_Rupee Short URL":
                    - /url: https://rdot.in/public/admin/?Module=Short_url&view=AdvancedListView&viewname=
                    - generic: Currency_Rupee
                    - generic: Short URL
            - listitem:
              - heading "rocket_launch IVR" [level=6]:
                - generic: rocket_launch
                - generic: IVR
              - list:
                - listitem:
                  - link "Cell_Tower IVR Providers":
                    - /url: https://rdot.in/public/admin/?Module=Ivr_providers&view=List&viewname=
                    - generic: Cell_Tower
                    - generic: IVR Providers
            - listitem:
              - heading "Currency_Rupee Test Menu" [level=6]:
                - generic: Currency_Rupee
                - generic: Test Menu
              - list:
                - listitem:
                  - link "Local_Activity Bug Ticket":
                    - /url: https://rdot.in/public/admin/?Module=Bug_ticket&view=AdvancedListView&viewname=
                    - generic: Local_Activity
                    - generic: Bug Ticket
                - listitem:
                  - link "Near_me Demo Module":
                    - /url: https://rdot.in/public/admin/?Module=Demo_module&view=AdvancedListView&viewname=
                    - generic: Near_me
                    - generic: Demo Module
                - listitem:
                  - link "Location_On Track Locations":
                    - /url: https://rdot.in/public/admin/?Module=Tracklocations&view=AdvancedListView&viewname=
                    - generic: Location_On
                    - generic: Track Locations
        - listitem [ref=e10]:
          - generic [ref=e12]: 
        - listitem [ref=e13]:
          - button "search" [ref=e14] [cursor=pointer]:
            - generic [ref=e15]: search
        - listitem [ref=e16]:
          - img [ref=e18]
      - list [ref=e19]:
        - listitem [ref=e20]:
          - button "Dayin" [ref=e22] [cursor=pointer]
        - listitem [ref=e23]:
          - generic "Call" [ref=e24]:
            - generic [ref=e25]: call
        - listitem [ref=e27]:
          - link "" [ref=e28] [cursor=pointer]:
            - /url: https://rdot.in/public/admin?Module=Mailmanagers&view=List
            - generic [ref=e29]: 
        - listitem [ref=e30]:
          - generic "Notification" [ref=e31]:
            - generic [ref=e32]: 
            - generic [ref=e33]: "1"
        - listitem [ref=e34]:
          - generic "Settings" [ref=e35]:
            - generic [ref=e36]: settings
  - generic [ref=e37]:
    - generic [ref=e38]:
      - img [ref=e41]
      - text:     
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "home" [ref=e48] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/Dashboard
          - generic [ref=e49]: home
      - listitem [ref=e50]:
        - link "Currency_Rupee" [ref=e51] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Payments&view=AdvancedListView&viewname=
          - generic [ref=e52]: Currency_Rupee
      - listitem [ref=e53]:
        - link "Public" [ref=e54] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Inven&view=AdvancedListView&viewname=
          - generic [ref=e55]: Public
      - listitem [ref=e56]:
        - link "Assignment" [ref=e57] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Comment&view=AdvancedListView&viewname=
          - generic [ref=e58]: Assignment
      - listitem [ref=e59]:
        - link "Rate_Review" [ref=e60] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Chats&view=Chat&chats_to=
          - generic [ref=e61]: Rate_Review
      - listitem [ref=e62]:
        - link "Notifications" [ref=e63] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Notifications&view=AdvancedListView&viewname=
          - generic [ref=e64]: Notifications
      - listitem [ref=e65]:
        - link "Mark_Unread_Chat_alt" [ref=e66] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Sms_notifiers&view=AdvancedListView&viewname=
          - generic [ref=e67]: Mark_Unread_Chat_alt
      - listitem [ref=e68]:
        - link "Mark_Email_Unread" [ref=e69] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Mailmanagers&view=AdvancedListView&viewname=
          - generic [ref=e70]: Mark_Email_Unread
      - listitem [ref=e71]:
        - link "calendar_month" [ref=e72] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Calendars&view=Calendars&viewname=
          - generic [ref=e73]: calendar_month
      - listitem [ref=e74]:
        - link "Currency_Rupee" [ref=e75] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=New_module&view=AdvancedListView&viewname=
          - generic [ref=e76]: Currency_Rupee
      - listitem [ref=e77]:
        - link "Schedule" [ref=e78] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Sample_module&view=AdvancedListView&viewname=
          - generic [ref=e79]: Schedule
      - listitem [ref=e80]:
        - link "Whatshot" [ref=e81] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Sourcemodule&view=AdvancedListView&viewname=
          - generic [ref=e82]: Whatshot
      - listitem [ref=e83]:
        - link "Call" [ref=e84] [cursor=pointer]:
          - /url: https://rdot.in/public/admin/?Module=Table&view=AdvancedListView&viewname=
          - generic [ref=e85]: Call
  - generic [ref=e93]:
    - generic [ref=e94]:
      - list [ref=e96]:
        - listitem [ref=e97]:
          - generic [ref=e98]:
            - generic [ref=e99]: Currency_Rupee
            - generic [ref=e100]: Test Inventory
        - listitem [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]: Currency_Rupee
            - generic [ref=e104]: One
        - listitem [ref=e105]:
          - generic [ref=e106]:
            - generic [ref=e107]: Currency_Rupee
            - generic [ref=e108]: Payments
        - listitem [ref=e109]:
          - generic [ref=e110]:
            - generic [ref=e111]: Contact_Mail
            - generic [ref=e112]: Leads
        - listitem [ref=e113]:
          - generic [ref=e114]:
            - generic [ref=e115]: Currency_Rupee
            - generic [ref=e116]: New moduleone
        - listitem [ref=e117]:
          - generic [ref=e120]: more_vert
      - generic [ref=e122]:
        - text: 
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e127]: 
          - listitem [ref=e128]:
            - generic [ref=e130]: 
    - generic [ref=e132]:
      - list [ref=e133]:
        - listitem [ref=e134]:
          - link "dashboard Dashboard" [expanded] [ref=e135] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e136]:
              - generic [ref=e137]: dashboard
              - generic [ref=e138]: Dashboard
        - listitem [ref=e139]:
          - link "widgets" [ref=e140] [cursor=pointer]:
            - /url: "#idgetsTap"
            - generic [ref=e141]: widgets
        - listitem [ref=e142]:
          - link "" [ref=e143] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e144]: 
      - generic [ref=e146]:
        - generic [ref=e147]: filter_alt_off
        - generic [ref=e148]: No Filtrate
      - text:  
    - tabpanel "dashboard Dashboard" [ref=e150]:
      - generic [ref=e151]:
        - generic [ref=e158]:
          - generic:
            - generic "Hide": 
          - generic [ref=e160]:
            - generic [ref=e161]:
              - generic [ref=e162]:
                - generic "All Test Inventory" [ref=e164]
                - generic "42" [ref=e166]
              - generic [ref=e169]: Currency_Rupee
            - generic [ref=e170] [cursor=pointer]: shopping_cart
        - generic [ref=e171]:
          - generic [ref=e173]:
            - generic [ref=e174]: palette
            - progressbar [ref=e176]
          - generic [ref=e179] [cursor=pointer]: grid_view
  - generic [ref=e180]:
    - generic "close" [ref=e181]:
      - generic [ref=e182]: close
    - generic [ref=e183]:
      - heading "Navbar Color Options" [level=5] [ref=e184]
      - generic [ref=e185]:
        - generic [ref=e186]:
          - generic "bg-gradient-x-purple-blue" [ref=e187]
          - generic "bg-gradient-x-purple-red" [ref=e188]
          - generic "bg-gradient-x-blue-green" [ref=e189]
          - generic "bg-gradient-x-orange-yellow" [ref=e190]
          - generic "bg-gradient-x-blue-cyan" [ref=e191]
          - generic "bg-gradient-x-red-pink" [ref=e192]
        - generic [ref=e193]:
          - generic "primary" [ref=e194]
          - generic "success" [ref=e195]
          - generic "info" [ref=e196]
          - generic "warning" [ref=e197]
          - generic "danger" [ref=e198]
          - generic "blue" [ref=e199]
      - separator [ref=e200]
      - heading "Layout Options" [level=5] [ref=e201]
      - generic [ref=e203]:
        - generic [ref=e204]:
          - radio "Vertical" [checked] [ref=e205]
          - generic [ref=e206]: Vertical
        - generic [ref=e207]:
          - radio "Horizontal" [ref=e208]
          - generic [ref=e209]: Horizontal
      - separator [ref=e210]
      - heading "List View Options" [level=5] [ref=e211]
      - generic [ref=e215]:
        - button "Basic" [ref=e216] [cursor=pointer]
        - button "Advanced" [ref=e217] [cursor=pointer]
      - separator [ref=e218]
      - generic [ref=e221]: Notification Sound
      - separator [ref=e225]
      - heading "phonelink_setup Dialer Settings" [level=5] [ref=e226]:
        - generic [ref=e227]: phonelink_setup
        - text: Dialer Settings
      - generic [ref=e228]:
        - generic [ref=e230]: Providers
        - generic [ref=e231]:
          - combobox [ref=e232]
          - combobox "Naveen IVR" [ref=e235] [cursor=pointer]:
            - textbox "Naveen IVR" [ref=e236]
        - generic [ref=e238]: Caller ID or DID Number
        - generic [ref=e239]:
          - combobox [ref=e240]
          - combobox "Select an Option" [ref=e243] [cursor=pointer]:
            - textbox "Select an Option" [ref=e244]
      - separator [ref=e245]
      - heading " WhatsApp Settings" [level=5] [ref=e246]:
        - generic [ref=e247]: 
        - text: WhatsApp Settings
      - generic [ref=e248]:
        - generic [ref=e250]: Providers
        - generic [ref=e251]:
          - combobox [ref=e252]
          - combobox "MetaWhatApp (8031406121)" [ref=e255] [cursor=pointer]:
            - textbox "MetaWhatApp (8031406121)" [ref=e256]
      - separator [ref=e257]
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | // Click Day button
  4  | export async function clickDay(page: Page) {
  5  |   await page.getByRole('button', { name: /day/i }).click();
  6  | }
  7  | 
  8  | // Click Yes
  9  | export async function clickYes(page: Page) {
  10 |   await page.getByRole('button', { name: 'Yes' }).click();
  11 | }
  12 | 
  13 | // Click No
  14 | export async function clickNo(page: Page) {
  15 |   await page.getByRole('button', { name: 'No' }).click();
  16 | }
  17 | 
  18 | // Click Logo
  19 | export async function openMyProfile(page: Page) {
  20 |   await page
  21 |     .getByRole('listitem').filter({ hasText: 'rsoft My Profile line_style' }).getByRole('link')
> 22 |     .click();
     |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 | }
  24 | 
  25 | // Logout
  26 | export async function logout(page: Page) {
  27 |   await page.getByRole('link', { name: 'Logout' }).click();
  28 | }
  29 | //Call Button
  30 | export async function clickCall(page: Page) {
  31 |   const headerActions = page
  32 |     .locator('ul')
  33 |     .filter({ has: page.getByRole('button', { name: /day/i }) })
  34 |     .first();
  35 | 
  36 |   await headerActions.locator('li').nth(1).click();
  37 | }
  38 | // Notification
  39 | export async function clickNotification(page: Page) {
  40 |   await page.getByRole('link', { name: 'Notification' }).click();
  41 | }
  42 | //settings
  43 | export async function clickSettings(page: Page) {
  44 |  await page.locator("i:has-text('settings')").click();
  45 | }
  46 | // Menu
  47 | export async function clickMenu(page: Page) {
  48 |  await page.getByText('list', { exact: true }).click();
  49 | }
  50 | 
```
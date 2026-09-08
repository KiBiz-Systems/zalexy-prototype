(function() {

// ── Inject sidebar CSS once ──────────────────────────────────────────────
var SIDEBAR_CSS = `
  .sidebar{width:220px;flex:0 0 220px;background:#1e293b;color:#f8fafc;display:flex;flex-direction:column;overflow-y:auto;font-family:"Inter","Roboto","Helvetica","Arial",sans-serif;}
  .sidebar .logo{display:flex;align-items:center;gap:10px;padding:18px 18px 14px;text-decoration:none;}
  .sidebar .logo svg{flex:0 0 auto;}
  .sidebar .logo span{font-weight:700;font-size:.95rem;letter-spacing:.02em;color:#f8fafc;}
  .sidebar .nav{padding:6px 10px;display:flex;flex-direction:column;gap:1px;flex:1;}
  .sidebar .nav-item{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;color:#f8fafc;font-size:.8rem;font-weight:500;text-decoration:none;cursor:pointer;line-height:1.3;}
  .sidebar .nav-item .material-symbols-rounded{font-size:18px;min-width:20px;color:rgba(248,250,252,.65);flex-shrink:0;}
  .sidebar .nav-item.disabled{opacity:.38;cursor:not-allowed;pointer-events:none;}
  .sidebar .nav-item:not(.disabled):hover{background:rgba(248,250,252,.08);}
  .sidebar .nav-item.active{background:rgba(248,250,252,.13);font-weight:600;}
  .sidebar .nav-item.active .material-symbols-rounded{color:#f8fafc;}
  .sidebar .nav-section{margin:14px 10px 4px;font-size:.62rem;font-weight:700;letter-spacing:.09em;color:rgba(248,250,252,.4);text-transform:uppercase;}
  .sidebar .sidebar-foot{padding:12px 18px;font-size:.65rem;color:rgba(248,250,252,.35);border-top:1px solid rgba(248,250,252,.07);}
`;

if (!document.getElementById('zalexy-sidebar-css')) {
  var styleEl = document.createElement('style');
  styleEl.id = 'zalexy-sidebar-css';
  styleEl.textContent = SIDEBAR_CSS;
  document.head.appendChild(styleEl);
}

// ── Sidebar HTML ─────────────────────────────────────────────────────────
var SHARED_SIDEBAR_HTML = `
  <aside class="sidebar">
    <a class="logo" href="index.html">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill="#3b82f6"/>
        <path d="M8 9h12l-12 10h12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>ZALEXY</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">point_of_sale</span>Point of Sale</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">groups</span>Leads</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">account_circle</span>Accounts</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">badge</span>Profiles</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">receipt_long</span>Transactions</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">request_quote</span>Invoices</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">badge</span>Staff</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">event</span>Scheduling</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">settings</span>Settings</a>
      <a class="nav-item" href="index.html"><span class="material-symbols-rounded">grid_view</span>Prototype Gallery</a>
      <div class="nav-section">Admin</div>
      <a class="nav-item" href="admin-intake-form-builder.html"><span class="material-symbols-rounded">dynamic_form</span>Intake &amp; Builder</a>
      <a class="nav-item" href="admin-settings-policy-engine.html"><span class="material-symbols-rounded">admin_panel_settings</span>Policy Engine</a>
      <div class="nav-section">Client</div>
      <a class="nav-item" href="profile-intake-tab.html"><span class="material-symbols-rounded">badge</span>Profile: Intake Tab</a>
      <a class="nav-item" href="profile-overview-tab.html"><span class="material-symbols-rounded">contact_page</span>Profile: Details Tab</a>
      <a class="nav-item" href="portal-profile-tab.html"><span class="material-symbols-rounded">family_restroom</span>Portal: My Account</a>
      <div class="nav-section">Billing</div>
      <a class="nav-item" href="billing-dashboard.html"><span class="material-symbols-rounded">space_dashboard</span>Dashboard</a>
      <a class="nav-item" href="billing-upcoming-billings.html"><span class="material-symbols-rounded">event_upcoming</span>Upcoming Billings</a>
      <a class="nav-item" href="billing-failed-payments.html"><span class="material-symbols-rounded">error</span>Failed Payments</a>
      <a class="nav-item" href="billing-member-billing.html"><span class="material-symbols-rounded">groups</span>Member Billing</a>
      <a class="nav-item" href="billing-module-settings.html"><span class="material-symbols-rounded">settings</span>Admin Setup</a>
      <div class="nav-section">Scheduling</div>
      <a class="nav-item" href="calendar-master.html"><span class="material-symbols-rounded">calendar_today</span>Calendar Master</a>
      <a class="nav-item" href="booking-flow-staff.html"><span class="material-symbols-rounded">edit_calendar</span>Staff Booking Flow</a>
      <a class="nav-item" href="booking-flow-client.html"><span class="material-symbols-rounded">person</span>Client Booking Flow</a>
      <a class="nav-item disabled" tabindex="-1" aria-disabled="true"><span class="material-symbols-rounded">link</span>Semi-Private Invite Link <span style="color:rgba(248,250,252,.4);font-size:.65rem;margin-left:auto;">TODO</span></a>
      <div class="nav-section">Funding</div>
      <a class="nav-item" href="rc-authorizations.html"><span class="material-symbols-rounded">assured_workload</span>Regional Center</a>
      <a class="nav-item" href="voucher-management.html"><span class="material-symbols-rounded">confirmation_number</span>Voucher Management</a>
    </nav>
    <div class="sidebar-foot">Prototype build · not production</div>
  </aside>
`;

// ── Active state helper ───────────────────────────────────────────────────
function getSidebarHtml() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  // handle file:// protocol where pathname ends with the filename
  if (!path || path === '/') path = 'index.html';
  return SHARED_SIDEBAR_HTML.replace(
    'class="nav-item" href="' + path + '"',
    'class="nav-item active" href="' + path + '"'
  );
}

// ── Auto-inject when script tag has data-inject attribute ─────────────────
if (document.currentScript && document.currentScript.hasAttribute('data-inject')) {
  document.currentScript.insertAdjacentHTML('beforebegin', getSidebarHtml());
}

window.getSidebarHtml = getSidebarHtml;

})();

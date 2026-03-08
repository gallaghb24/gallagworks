import { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Users, ClipboardList, LogOut } from "lucide-react";
import logo from "@/assets/gallag-wordmark-light.png";

const navItems = [
  { label: "Overview", path: "/admin", icon: LayoutDashboard },
  { label: "Leads", path: "/admin/leads", icon: Users },
  { label: "Assessments", path: "/admin/assessments", icon: ClipboardList },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      setReady(true);
    };
    check();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-mono text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-60 bg-black border-r border-border flex flex-col shrink-0">
        <div className="p-5 border-b border-border">
          <Link to="/admin">
            <img src={logo} alt="Gallag Works" className="h-5" />
          </Link>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active
                    ? "text-primary bg-card"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-1 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

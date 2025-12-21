import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    User,
    Lock,
    Camera,
    Save,
    Loader2,
    Moon,
    Sun,
    Bell,
    Shield,
    Eye,
    EyeOff,
} from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';
import { cn } from '@/lib/utils';

export function SettingsPage() {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { theme, toggleTheme } = useUIStore();

    // Profile form state
    const [profileForm, setProfileForm] = useState({
        name: user?.name || '',
        email: user?.email || '',
    });
    const [isProfileSaving, setIsProfileSaving] = useState(false);
    const [profileMessage, setProfileMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Password form state
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    });
    const [isPasswordSaving, setIsPasswordSaving] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Avatar upload
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProfileSaving(true);
        setProfileMessage(null);

        try {
            // TODO: Implement API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setProfileMessage({ type: 'success', text: 'Perfil actualizado correctamente' });
        } catch {
            setProfileMessage({ type: 'error', text: 'Error al actualizar el perfil' });
        } finally {
            setIsProfileSaving(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordMessage(null);

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setPasswordMessage({ type: 'error', text: 'Las contrasenas no coinciden' });
            return;
        }

        if (passwordForm.newPassword.length < 6) {
            setPasswordMessage({ type: 'error', text: 'La contrasena debe tener al menos 6 caracteres' });
            return;
        }

        setIsPasswordSaving(true);

        try {
            // TODO: Implement API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setPasswordMessage({ type: 'success', text: 'Contrasena actualizada correctamente' });
            setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch {
            setPasswordMessage({ type: 'error', text: 'Error al actualizar la contrasena' });
        } finally {
            setIsPasswordSaving(false);
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarPreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="section-header">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                        <h1 className="section-title">Configuracion</h1>
                        <p className="section-subtitle">Gestiona tu perfil y preferencias</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6">
                {/* Profile Section */}
                <div className="glass-card">
                    <div className="p-6 border-b border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Perfil</h2>
                                <p className="text-sm text-muted-foreground">Tu informacion personal</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
                        {/* Avatar */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold overflow-hidden">
                                    {avatarPreview ? (
                                        <img src={avatarPreview} alt="Avatar" className="h-full w-full object-cover" />
                                    ) : (
                                        user?.name?.charAt(0).toUpperCase() || 'U'
                                    )}
                                </div>
                                <label className="absolute -bottom-1 -right-1 p-1.5 bg-muted rounded-full cursor-pointer hover:bg-accent transition-colors">
                                    <Camera className="h-4 w-4" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleAvatarChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <div>
                                <h3 className="font-medium">{user?.name}</h3>
                                <p className="text-sm text-muted-foreground capitalize">{user?.role}</p>
                            </div>
                        </div>

                        {/* Form fields */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nombre</label>
                                <input
                                    type="text"
                                    value={profileForm.name}
                                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    value={profileForm.email}
                                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        {profileMessage && (
                            <div className={cn(
                                'px-4 py-3 rounded-lg text-sm',
                                profileMessage.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                            )}>
                                {profileMessage.text}
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isProfileSaving}
                                className="btn-primary"
                            >
                                {isProfileSaving ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <>
                                        <Save className="h-4 w-4" />
                                        Guardar cambios
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Password Section */}
                <div className="glass-card">
                    <div className="p-6 border-b border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-orange-500/10">
                                <Lock className="h-5 w-5 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Seguridad</h2>
                                <p className="text-sm text-muted-foreground">Cambia tu contrasena</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Contrasena actual</label>
                            <div className="relative">
                                <input
                                    type={showPasswords.current ? 'text' : 'password'}
                                    value={passwordForm.currentPassword}
                                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                                    className="w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nueva contrasena</label>
                                <div className="relative">
                                    <input
                                        type={showPasswords.new ? 'text' : 'password'}
                                        value={passwordForm.newPassword}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                                        className="w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Confirmar contrasena</label>
                                <div className="relative">
                                    <input
                                        type={showPasswords.confirm ? 'text' : 'password'}
                                        value={passwordForm.confirmPassword}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                        className="w-full px-3 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {passwordMessage && (
                            <div className={cn(
                                'px-4 py-3 rounded-lg text-sm',
                                passwordMessage.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                            )}>
                                {passwordMessage.text}
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isPasswordSaving}
                                className="btn-primary"
                            >
                                {isPasswordSaving ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <>
                                        <Shield className="h-4 w-4" />
                                        Cambiar contrasena
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Preferences Section */}
                <div className="glass-card">
                    <div className="p-6 border-b border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                                <Bell className="h-5 w-5 text-blue-500" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Preferencias</h2>
                                <p className="text-sm text-muted-foreground">Personaliza tu experiencia</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        {/* Theme toggle */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Tema</h3>
                                <p className="text-sm text-muted-foreground">Selecciona el tema de la interfaz</p>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
                            >
                                {theme === 'dark' ? (
                                    <>
                                        <Moon className="h-4 w-4" />
                                        Oscuro
                                    </>
                                ) : (
                                    <>
                                        <Sun className="h-4 w-4" />
                                        Claro
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Notifications preference */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Notificaciones</h3>
                                <p className="text-sm text-muted-foreground">Recibe alertas en tiempo real</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
